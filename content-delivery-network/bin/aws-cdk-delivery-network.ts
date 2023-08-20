#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkDeliveryNetworkStack } from '../lib/aws-cdk-delivery-network-stack';

const app = new cdk.App();
new AwsCdkDeliveryNetworkStack(app, 'AwsCdkDeliveryNetworkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});