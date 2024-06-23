# AWS CDK ハンズオン

<https://cdkworkshop.com/>

## TOC

- [事前準備](#事前準備)
- [開発](#開発)
- [使用サービス概要](#使用サービスの概要詳細は別ページ)
- [用語](#用語)

以下個人的メモ(解説)

## 事前準備

事前準備はこちらへ。

→ [事前準備: 環境構築]([/Users/airi/aws/aws-cdk-handson/docs/事前準備_環境構築.md](https://github.com/AiriNarita/cdk_hands-on/blob/main/Users/airi/aws/aws-cdk-handson/docs/%E4%BA%8B%E5%89%8D%E6%BA%96%E5%82%99_%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89.md))

## 開発

ハンズオン掲載

※後でちょっと補足の作るかも

## 開発後作成されたCloudFormation

開発で、メインスタックの定義ができたら、
`cdk synth`コマンドを使用しCDK アプリを合成.
テンプレートを確認する。

**できたものはこちらに記載した**

- [そのままバージョン](/Users/airi/aws/aws-cdk-handson/docs/cloud_formation.yaml)
- [解説(コメント)つけたバージョン](/Users/airi/aws/aws-cdk-handson/docs/cloudFormation_coment+.yaml)

## 使用サービスの概要(詳細は別ページ)

### [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/jp/cdk/)

→ [詳細ページはこちら](/Users/airi/aws/aws-cdk-handson/docs/service_details/cdk.md)

- **AWSの環境を 一般のプログラミング言語で記述できるツールキット**
-　コードを使用して AWS インフラストラクチャを管理するために使用できるオープンソースフレームワークで、このアプローチは、**Infrastructure as Code (IaC)** と呼ぶ

### [AWS Lambda](https://aws.amazon.com/jp/lambda/)

→ [サービスの詳細はこちらのページにまとめた](docs/service_details/lambda.md)

> イベント発生時にコードを実行し、コンピューティングリソースを自動的に管理するコンピューティングサービス

- サーバーのプロビジョニング/管理なしでプログラムを実行できるサー
ビス<br>
= EC2インスタンスなどのサーバーを準備しなくてもコードを実行できるサーバーレスコンピューティングサービス<br />
= **サーバーレスアプリケーション**

## [Amazon API Gateway](https://aws.amazon.com/jp/api-gateway/)

→ [サービスの詳細はこちらのページにまとめた](/Users/airi/aws/aws-cdk-handson/docs/service_details/amazon_api-gateway.md)

- **APIの作成、公開、保守、モニタリング、保護を簡単に行えるサービス**

## [AWS CloudFormation](https://aws.amazon.com/jp/cloudformation/)

→[サービスの詳細はこちらのページにまとめた](/Users/airi/aws/aws-cdk-handson/docs/service_details/cloudformation.md)

- **AWSリソースをプロビジョニングできるサービス**
- CDKを利用することで、CloudFormationのテンプレートを自動生成できる
- AWSインフラを管理

## 用語

- プロビジョニング（Provisioning）:<br>
システムやアプリケーションが**動作するために必要なリソース**（ハードウェア、ソフトウェア、ネットワーク、ストレージなど）**を準備、設定、展開するプロセス**を指す。
