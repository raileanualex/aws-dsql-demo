#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ServiceStack } from "./modules/ServiceStack";

const app = new cdk.App();

const config = {
    account: process.env.CDK_DEFAULT_ACCOUNT || '339712871873',
    region: 'eu-west-2',
  };

const label = {
    id: 'aws-dsql-demo'
}
new ServiceStack(app, `${label.id}-service-stack`, {
    env: { account: config.account, region: config.region },
    label,
    domainName: "railalex.com"
});