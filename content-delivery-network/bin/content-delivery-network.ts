#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ContentDeliveryNetworkStack } from '../lib/content-delivery-network-stack';
import {getNamespace} from "../types/namespace";

const namespace = getNamespace(process.env.NAMESPACE);
const app = new cdk.App();
new ContentDeliveryNetworkStack(app, namespace, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});