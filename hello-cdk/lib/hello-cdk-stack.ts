import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';

/**
 * メイン スタックが定義される場所
 * このスタックは、アプリケーションのリソースを定義するために使用
 * アプリケーションの核心部分!
 * 
 * https://cdkworkshop.com/20-typescript/20-create-project/300-structure.html
 */

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // SQSキューを作成
    const queue = new sqs.Queue(this, 'CdkWorkshopQueue', {
      visibilityTimeout: cdk.Duration.seconds(300) //キューの可視性タイムアウトを300秒に設定
    });

    // SNSトピックを作成
    const topic = new sns.Topic(this, 'CdkWorkshopTopic');

    // SQSキューをSNSトピックのサブスクリプションとして追加
    // → SNSトピックにメッセージが送信されると、SQSキューにもそのメッセージが届くようになる
    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
