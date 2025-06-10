import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface FunctionsStackProps extends cdk.StackProps {
    label: {
        id: string;
    },
    domainName: string;
    dsqlClusterEndpoint: string;
    dsqlClusterArn: string;
}

export class FunctionsStack extends cdk.Stack {
    generateGameLambda: lambda.Function;
    
    constructor(scope: constructs.Construct, id: string, props: FunctionsStackProps) {
        super(scope, `${id}-functions-stack`, props);

        // Create Lambda role with DSQL permissions
        const lambdaRole = new iam.Role(this, 'DSQLLambdaRole', {
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
            ]
        });

        // Add DSQL permissions
        lambdaRole.addToPolicy(new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: [
                'dsql:DbConnect',
                'dsql:ExecuteStatement',
                'dsql:DbConnectAdmin',
            ],
            resources: [props.dsqlClusterArn]
        }));

        this.generateGameLambda = new nodeLambda.NodejsFunction(this, 'GenerateGameLambda', {
            entry: './service/generate-game/Handler.ts',
            runtime: lambda.Runtime.NODEJS_20_X,
            role: lambdaRole,
            environment: {
                DSQL_ENDPOINT: props.dsqlClusterEndpoint
            }
        });
    }
}
