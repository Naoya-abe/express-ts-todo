# 環境構築方法（MacOS向け）

## Homebrew

- 以下のサイトを参考に Homebrew をインストールしてください。
- [参考：【初心者向け】Homebrew のインストール方法を解説！](https://aiacademy.jp/media/?p=2817)

## Git

- 以下のサイトを参考に Git をインストールしてください。
- [参考：Mac に Homebrew から git をインストールする方法](https://hirooooo-lab.com/development/install-git-by-homebrew/)
- 参考ページ中に以下のようなサンプルコードがありますが、実際に自分の PC の画面にコマンドを入力する際には「`$`」マークをつけないで入力してください（「`$`」マークを入力するとうまく動作しません）

```
$ git --version　← 左のサンプルコードの「$」マークは自分のPCのターミナルに入力しない
git version 2.21.1 (Apple Git-122.3)
```

- Git のインストールが完了したら以下のサイトの「1. プロジェクトをまたいだ全体の設定（グローバル, global）」を参考に git のユーザー名・メールアドレスを設定してください
- [参考：Git でユーザー名とメールアドレスを設定する方法（全体用とプロジェクト用）](https://laboradian.com/set-git-user-and-email/#1_global)

## Curl

- 以下のサイトを参考に Curl をインストールしてください。
- [参考：Mac から curl を使う方法をご紹介！](https://aprico-media.com/posts/8236)

## Docker

- 以下のサイトを参考に Docker Desktop for Mac をインストールしてください
- [参考：【入門】はじめての Docker Desktop for Mac のインストールと CentOS の仮想環境構築のセットアップ](https://qiita.com/gahoh/items/92217e0a887bb81e3155)

## Node.js

- 今回は nvm を用いて Node.js のインストール/バージョン管理を行います
- 以下のサイトを参考に nvm をインストールしてください
- [nvm(Node Version Manager)を使って Node.js をインストールする手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a)
- nvm のインストールが完了したら 2022 年 1 月 9 日時点では Node.js の LTS が v18.13.0 のため以下のコマンドを入力して v18.13.0 の Node.js をインストールしてください。

```
$ nvm install 18.13.0
----以下、実行結果----
Downloading and installing node v18.13.0...
Downloading https://nodejs.org/dist/v18.13.0/node-v18.13.0-darwin-x64.tar.xz...
########################################################################################################################################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v18.13.0 (npm v8.19.2)
Creating default alias: default -> 18.13.0 (-> v18.13.0)
--------------------
```

- 以下のコマンドを入力して Node.js の v18.13.0 が使用されていることを確認してください。

```
$ node -v
----以下、実行結果----
v18.13.0
--------------------
```

- 上記タイミングで v18.13.0 以外が出る場合は以下のコマンドを入力して Node.js のバージョンを切り替えてください

```
$ nvm ls
----以下、実行結果(v18.13.0がインストールされていることを確認)-------
->     v18.13.0
default -> 18.13.0 (-> v18.13.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v18.13.0) (default)
stable -> 18.12 (-> v18.13.0) (default)
lts/* -> lts/hydrogen (-> v18.13.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.1 (-> N/A)
lts/gallium -> v16.18.1 (-> N/A)
lts/hydrogen -> v18.13.0
------------------------------------------------------------

$ nvm use 18.13.0
----以下、実行結果(使用するNode.jsのバージョンをv18.13.0に変更)----
Now using node v18.13.0 (npm v8.19.2)
------------------------------------------------------------
```

## リモートレポジトリのクローン

- 以下のコマンドを入力して任意のディレクトリに本レポジトリを clone してください

```
$ git clone https://github.com/Naoya-abe/express-ts-todo.git
```

## アプリケーションの立ち上げ

- アプリケーションの clone が完了したら以下のコマンドを入力することで`http://localhost:8080`でアプリケーションが立ち上がります
- Docker desktop が立ち上がっていることを確認してから以下のコマンドを入力してください

```
$ cd express-ts-todo
$ npm i
$ docker compose -f docker-compose.dev.yml up
```

- [Postman](https://cloudsmith.co.jp/blog/efficient/2021/08/1837085.html)や[RapidApi Client](https://www.youtube.com/watch?v=MTrj3tNf9jA)にて`http://localhost:8080`を入力することで動作確認ができます
- `http://localhost:8080/api-docs`で API の仕様書を見ることができます

## PrismaStudioを用いたDBの確認
- アプリケーションが無事に立ち上がったらterminalのタブを別途用意して、以下のコマンドを入力してください
```
# 立ち上がっているバックエンドアプリケーションのDockerコンテナに入るコマンド
$ docker container exec -it express-ts-todo-app bash
```
- Dockerコンテナに入ることができたら、以下のコマンドを入力しPrismaStudioを立ち上げてください
```
# 入力するコマンド
$ npx prisma studio

# 結果
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5555
```
- 実際に`http://localhost:5555`にアクセスして、DBの中身が見れるか確認してください。

## Jestを用いたテストの実行方法
- アプリケーションが無事に立ち上がったらterminalのタブを別途用意して、以下のコマンドを入力してください
```
# 立ち上がっているバックエンドアプリケーションのDockerコンテナに入るコマンド
$ docker container exec -it express-ts-todo-app bash
```
- Dockerコンテナに入ることができたら、以下のコマンドを入力することでJestを用いたテストを実行できます
```
# 入力するコマンド
$ npm run test

# 結果
> backend@1.0.0 test
> npx jest

 PASS  tests/app.test.ts (5.175 s)
  test todo function
    ✓ Sample GET "/" (12 ms)
    ✓ Pass empty title to POST "/todo" (46 ms)
    ✓ Success POST "/todo" (91 ms)
    ✓ Success GET "/todo/list" (10 ms)
    ✓ Pass empty body to GET "/todo" (2 ms)
    ✓ Pass todoId in string to GET "/todo" (2 ms)
    ✓ Success GET "/todo" (10 ms)
    ✓ Pass empty body to PATCH "/todo" (2 ms)
    ✓ Pass empty todoId to PATCH "/todo" (3 ms)
    ✓ Pass todoId in string to PATCH "/todo" (2 ms)
    ✓ Pass empty title to PATCH "/todo" (3 ms)
    ✓ Pass empty isDone to PATCH "/todo" (3 ms)
    ✓ Success PATCH "/todo" (14 ms)
    ✓ Pass empty body to DELETE "/todo" (3 ms)
    ✓ Success DELETE "/todo" (17 ms)

Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        5.422 s, estimated 6 s
Ran all test suites.
```

## CodeFormatter の導入

- 以下の 2 つの拡張機能を VSCode に入れてください
  - Prettier - Code formatter
  - ESLint
- Command キーと一緒に「,（カンマキー）」を押下して VSCode の設定ファイルを開いてください
- 設定の範囲を「ユーザー」から「ワークスペース」に変更してください(検索バーの下のタブで範囲を変更できます)
- 設定画面の右上に「紙に矢印が書いてあるアイコン」があると思いますのでクリックしてください（settings.json を開いてください）
- 以下のコードを記載してください

```
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"[terraform]": {
		"editor.defaultFormatter": "hashicorp.terraform"
	}
}
```

- VSCode を再起動して設定を反映させてください（と参考サイトには書いてあるけど再起動はいらないかも？）
- [参考：Node.js（ES6 で実装）における ESLint・Prettier の設定を 1 からやってみた](https://note.com/shift_tech/n/n8bbe1c05ba0b)

## Draw.io の導入

- 以下の拡張機能を VSCode に入れてください
  - Draw.io integration
- 上記拡張機能をインストールすることで、`infra/architecture.dio`でインフラのアーキテクチャー図を確認することができます