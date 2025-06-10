import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

export interface StorageStackProps extends cdk.StackProps {
}

export class StorageStack extends cdk.Stack {
    dsqlCluster: cdk.CfnResource;
    dsqlClusterArn: string;
    dsqlClusterEndpoint: string;

    constructor(scope: constructs.Construct, id: string, props: StorageStackProps) {
        super(scope, id, props);

        // Create DSQL cluster using native CloudFormation resource
        this.dsqlCluster = new cdk.CfnResource(this, 'DSQLCluster', {
            type: 'AWS::DSQL::Cluster',
            properties: {
                DeletionProtectionEnabled: true,
                Tags: [
                    {
                        Key: 'Project',
                        Value: 'aws-dsql-demo'
                    }
                ]
            }
        });

        this.dsqlClusterArn = this.dsqlCluster.getAtt('ResourceArn').toString();
        this.dsqlClusterEndpoint = `${this.dsqlCluster.getAtt('Identifier').toString()}.dsql.${this.region}.on.aws`;
    }
}
