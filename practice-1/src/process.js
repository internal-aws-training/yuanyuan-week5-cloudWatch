const { CloudWatch } = require('aws-sdk');
const cloudwatch = new CloudWatch();

const process = async() => {
  const params = {
    MetricData: [
      {
        MetricName: 'metrics-for-lambda' /* required */,
        Dimensions: [
          {
            Name: 'hello_world' /* required */,
            Value: 'Hello World!' /* required */,
          },
        ],
        StatisticValues: {
          Maximum: '1' /* required */,
          Minimum: '1' /* required */,
          SampleCount: 1 /* required */,
          Sum: 1 /* required */,
        },
      },
    ],
    Namespace: 'yyl-week5-practice-1-cloudWatch-metrics-namespace' /* required */,
  };

  const response = await cloudwatch.putMetricData(params).promise();
  console.log('Successfully put metric data with response ', response);
};

module.exports = process;
