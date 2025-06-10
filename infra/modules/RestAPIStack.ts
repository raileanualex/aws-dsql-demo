import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export type ServiceStackProps = cdk.StackProps & {
    label: {
        id: string;
    },
    domainName: string;
    generateGameLambda: lambda.Function;
};

export class RestAPIStack extends cdk.Stack {
    constructor(scope: constructs.Construct, id: string, props: ServiceStackProps) {
        super(scope, `${id}-rest-api-stack`, props);

        // Create API Gateway
        const api = new apigateway.RestApi(this, `${id}-APIGateway`, {
            restApiName: `${id}-API`,
            description: 'This service serves the API',
            apiKeySourceType: apigateway.ApiKeySourceType.HEADER,
        });

        const v1 = api.root.addResource('v1');

        v1.addResource('generate-game').addMethod('POST', new apigateway.LambdaIntegration(props.generateGameLambda), {
            apiKeyRequired: true
        });

        const corsOptions: apigateway.CorsOptions = {
            allowOrigins: apigateway.Cors.ALL_ORIGINS,
            allowMethods: apigateway.Cors.ALL_METHODS,
        };

        api.root.addCorsPreflight(corsOptions);

        const apiKey = new apigateway.ApiKey(this, `${id}-ApiKey`);
        const usagePlan = new apigateway.UsagePlan(this, `${id}-UsagePlan`, {
            name: `${id}-UsagePlan`,
            apiStages: [
            {
                api,
                stage: api.deploymentStage,
            },
            ],
        });

        usagePlan.addApiKey(apiKey);
    }
}
