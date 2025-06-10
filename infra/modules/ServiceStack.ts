import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';
import { FunctionsStack } from './FunctionsStack';
import { RestAPIStack } from './RestAPIStack';
import { StorageStack } from './StorageStack';

export type ServiceStackProps = cdk.StackProps & {
    label: {
        id: string;
    },
    domainName: string;
};

export class ServiceStack extends cdk.Stack {
    constructor(scope: constructs.Construct, id: string, props: ServiceStackProps) {
        super(scope, id, props);

        const storageStack = new StorageStack(this, id, {
            ...props,
            env: {
                account: this.account,
                region: this.region
            }
        });

        const functionsStack = new FunctionsStack(this, id, {
            ...props,
            env: {
                account: this.account,
                region: this.region
            },
            dsqlClusterEndpoint: storageStack.dsqlClusterEndpoint,
            dsqlClusterArn: storageStack.dsqlClusterArn,
        });
        
        new RestAPIStack(this, id, {
            ...props,
            env: {
                account: this.account,
                region: this.region
            },
            generateGameLambda: functionsStack.generateGameLambda,
        });
    }
}
