# [AWS Lambda](https://aws.amazon.com/jp/lambda/)

## 概要

【**サーバーレスでイベント駆動型のコンピューティングサービス**】

![](pic/lambda.png)
→ [動画](https://youtu.be/qlkr0h9JQ6U)

- **サーバーのプロビジョニング/管理なし**でプログラムを実行できるサー
ビス<br/>
= EC2インスタンスなどのサーバーを準備しなくてもコードを実行できる<br/>
= [**サーバーレスアプリケーション**](https://aws.amazon.com/jp/serverless/)

- ラムダ関数という単位で実行プログラムとトリガーとなるイベントを定義する。

<details>

<summary>サーバーレスアプリケーション</summary>

サーバーを管理することなく、コードの実行、データの管理、アプリケーションの統合を行うもの。

lambdaのほか、サーバーレスアプリケーションには以下のようなものがある
<https://aws.amazon.com/jp/serverless/>

要チェック

</details>

## 必要な設定

- 利用言語
- 割り当てるメモリ量(→LambdaのCPUがこれで決まる)
- タイムアウトまでの時間
- Lambdaに割り当てるIAMロール
- VPC内で実行するのか、外で実行するのか

## [料金体系](https://aws.amazon.com/jp/lambda/pricing/)

- リクエストベース
  - 実行回数と実行時間  

## 関連

### Lambda@Edge

- Amazon CloudFrontの機能で、アプリケーションのユーザーに近いロケーションでコードを実行するもの。
