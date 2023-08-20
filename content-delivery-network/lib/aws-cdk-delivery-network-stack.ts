import {Construct} from 'constructs';
import {Function} from 'aws-cdk-lib/aws-lambda';
import {Code, Runtime} from 'aws-cdk-lib/aws-lambda';
import {LambdaIntegration, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {Stack, StackProps} from 'aws-cdk-lib';

export class AwsCdkDeliveryNetworkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new RestApi(this, 'iac-example', {
      restApiName: 'IaC example',
      description: 'Infrastructure as Code example'
    });

    const applicationInfoHandlerFn = new Function(this, 'application-info-handler', {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset('../backend/lambdas'),
      handler: 'application-info.handler',
    });
    const simpleResource = api.root.addResource('application-info');
    simpleResource.addMethod('GET', new LambdaIntegration(applicationInfoHandlerFn));
  }
}
