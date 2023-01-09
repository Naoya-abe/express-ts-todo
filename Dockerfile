# Dockerイメージの元となるOfficialイメージをDockerHubより取得(個人PCではarm64のプロセッサ用のイメージを使う)
FROM arm64v8/node:18.13.0
# IntelチップのMacではおそらく以下のFROMコマンドを使う（未検証）
# FROM node:18.13.0

# Docker内のexpress-ts-todoで作業をすることを指定（該当のdirectoryが無いときは作成する）
WORKDIR /express-ts-todo

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Docker側で必要なパッケージをインストールする
RUN npm install

# ローカルPCの/express-ts-todoディレクトリをDocker内の/express-ts-todoにコピーする
COPY . .

# Docker側の8080番ポートを使うことを宣言する
EXPOSE 8080