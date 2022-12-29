## ブランチ戦略
プロト1開発では**GitLab-flow**を採用する。

本来はtrunkベースでの開発が必要だが、コンセンサスベイス社のFork権限が付与できないので、プロト開発 1 では諦める。

プロト開発1では以下の整理で、branchを作成する。

- 本番（エンジニア以外動作確認）：main
- 動作確認（エンジニア、プロダクトオーナー）：dev
- 開発（アサインされたエンジニア）：feature/JIRA のチケット id_JIRA のチケット名
  - 例：feature/BLC-9\_フロント Holder 画面の作成

[参考：Git-flow 　 GitHub-flow GitLab-flow という開発フローについてまとめる](https://qiita.com/pandama09396862/items/9f013fa7b60f4d12d1d8)