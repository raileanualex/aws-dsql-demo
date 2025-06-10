import "reflect-metadata";
import { DataSource } from "typeorm";
import { DsqlSigner } from "@aws-sdk/dsql-signer";
import { Game } from "../models/Game";

export class DatabaseService {
    private static dataSource: DataSource;

    private static async getAuthToken(host: string): Promise<string> {
        const signer = new DsqlSigner({
            hostname: host,
            region: process.env.AWS_REGION || 'eu-west-2'
        });

        return await signer.getDbConnectAdminAuthToken();
    }

    static async initialize(): Promise<DataSource> {
        if (!DatabaseService.dataSource) {
            const host = process.env.DSQL_ENDPOINT || '';

            DatabaseService.dataSource = new DataSource({
                type: "postgres",
                host: host,
                port: 5432,
                username: 'admin',
                password: await DatabaseService.getAuthToken(host),
                database: "postgres",
                ssl: {
                    rejectUnauthorized: true
                },
                synchronize: true,
                logging: true,
                entities: [Game]
            });

            // Initialize connection to postgres database
            await DatabaseService.dataSource.initialize();
        }

        return DatabaseService.dataSource;
    }

    static async saveGame(game: Partial<Game>): Promise<Game> {
        const dataSource = await DatabaseService.initialize();
        const gameRepository = dataSource.getRepository(Game);
        
        const newGame = gameRepository.create(game);
        return await gameRepository.save(newGame);
    }
} 