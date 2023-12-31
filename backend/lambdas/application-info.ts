import {APIGatewayProxyResult, Handler} from 'aws-lambda';
export const handler: Handler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'This is informations about application',
      nodeVersion: process.version,
      platformRunning: process.platform,
      region: process.env.AWS_REGION
    })
  };
};
