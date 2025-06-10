import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { DatabaseService } from "../shared/services/DatabaseService";
import { generateRandomGame } from "../shared/utils/GameGenerator";


export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    console.log(event, context);
    await DatabaseService.initialize();

    try {
        // Generate a random game
        const gameData = generateRandomGame();
        
        // Save it to the database
        const savedGame = await DatabaseService.saveGame(gameData);
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Game generated and saved successfully',
                game: savedGame
            })
        };
    } catch (error) {
        console.error('Error generating game:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Failed to generate and save game',
                error: error instanceof Error ? error.message : String(error)
            })
        };
    }
}

