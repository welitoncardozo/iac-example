import {Construct} from 'constructs';
import {Function} from 'aws-cdk-lib/aws-lambda';
import {Code, Runtime} from 'aws-cdk-lib/aws-lambda';
import {LambdaIntegration, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {Stack, StackProps} from 'aws-cdk-lib';
import {Namespace} from '../types/namespace';

export class ContentDeliveryNetworkStack extends Stack {
  constructor(scope: Construct, namespace: Namespace, props: StackProps) {
    super(scope, `iac-example-content-delivery-network-stack-${namespace}`, props);

    // const domain = namespace === 'prod' ? 'domain.com' : `${namespace}.domain.com`;

    const api = new RestApi(this, `iac-example-api-${namespace}`, {
      restApiName: 'IaC example',
      description: 'Infrastructure as Code example'
    });

    const applicationInfoHandlerFn = new Function(this, `application-info-handler-${namespace}`, {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset('../backend/lambdas'),
      handler: 'application-info.handler',
    });
    const simpleResource = api.root.addResource('application-info');
    simpleResource.addMethod('GET', new LambdaIntegration(applicationInfoHandlerFn));
  }
}
