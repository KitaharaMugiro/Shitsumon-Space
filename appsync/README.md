# AppSync


## 気づき
### スキーマのドキュメント
https://docs.aws.amazon.com/ja_jp/appsync/latest/devguide/designing-your-schema.html
を見るとスキーマ書きやすい。

### Query書かないとダメ
Queryは１つはないといけないらしい

### リゾルバーのドキュメント
https://docs.aws.amazon.com/ja_jp/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html

### VTLからクエリ変換の罠に気づけない
コンソールでテストするまでわからない。
$util.dynamodb.toDynamoDBJsonが必要みたい。

### マッピング忘れてた
mappingtempaltes.ymlを編集するのを忘れる。ていうか基本t形にschema.graphqlを見続けないといけないし型の恩恵得られない。

### 返り値がListはやらない
型エラーが解決できなかった。
Can't resolve value (/listMessage) : type mismatch error, expected type LIST
