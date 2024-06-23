# AWS CDK ハンズオン

<https://pages.awscloud.com/rs/112-TZM-766/images/HOL-10_AWS_Summit_Online_2020_Management.pdf>

> 本コースのゴール<br>
> • コードでAWS環境を管理する方法を理解すること<br>
> • AWS CDK ( TypeScript ) を利用したAWS環境の構築方法を学ぶこと

以下個人的メモ(解説)

---

## 使用サービスの概要(詳細は別ページ)

### [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/jp/cdk/)

### [AWS Lambda](https://aws.amazon.com/jp/lambda/)

→ [サービスの詳細はこちらのページにまとめた](/Users/airi/aws/aws-cdk-handson/service_details/lambda.md)

> イベント発生時にコードを実行し、コンピューティングリソースを自動的に管理するコンピューティングサービス

- サーバーのプロビジョニング/管理なしでプログラムを実行できるサー
ビス<br>
= EC2インスタンスなどのサーバーを準備しなくてもコードを実行できるサーバーレスコンピューティングサービス<br />
= **サーバーレスアプリケーション**

## Amazon API Gateway
