# AWS CDK ハンズオン

<https://pages.awscloud.com/rs/112-TZM-766/images/HOL-10_AWS_Summit_Online_2020_Management.pdf>

> 本コースのゴール<br>
> • コードでAWS環境を管理する方法を理解すること<br>
> • AWS CDK ( TypeScript ) を利用したAWS環境の構築方法を学ぶこと

## TOC

- [事前準備](#事前準備)
- [使用サービス概要](#使用サービスの概要詳細は別ページ)
- [用語](#用語)

以下個人的メモ(解説)

## 事前準備

## 使用サービスの概要(詳細は別ページ)

### [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/jp/cdk/)

→ [詳細ページはこちら](service_details/cdk.md)

- AWSの環境を 一般のプログラミング言語で記述できるツールキット
-

### [AWS Lambda](https://aws.amazon.com/jp/lambda/)

→ [サービスの詳細はこちらのページにまとめた](/Users/airi/aws/aws-cdk-handson/service_details/lambda.md)

> イベント発生時にコードを実行し、コンピューティングリソースを自動的に管理するコンピューティングサービス

- サーバーのプロビジョニング/管理なしでプログラムを実行できるサー
ビス<br>
= EC2インスタンスなどのサーバーを準備しなくてもコードを実行できるサーバーレスコンピューティングサービス<br />
= **サーバーレスアプリケーション**

## [Amazon API Gateway](https://aws.amazon.com/jp/api-gateway/)

→ [サービスの詳細はこちらのページにまとめた](/Users/airi/aws/aws-cdk-handson/service_details/amazon_api-gateway.md)

- **APIの作成、公開、保守、モニタリング、保護を簡単に行えるサービス**

## [AWS CloudFormation](https://aws.amazon.com/jp/cloudformation/)

→[サービスの詳細はこちらのページにまとめた](/Users/airi/aws/aws-cdk-handson/service_details/cloudformation.md)

- **AWSリソースをプロビジョニングできるサービス**
- CDKを利用することで、CloudFormationのテンプレートを自動生成できる
- AWSインフラを管理

## 用語

- プロビジョニング（Provisioning）:<br>
システムやアプリケーションが**動作するために必要なリソース**（ハードウェア、ソフトウェア、ネットワーク、ストレージなど）**を準備、設定、展開するプロセス**を指す。
