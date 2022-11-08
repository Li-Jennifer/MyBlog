# #!/usr/bin/env sh
# # 确保脚本抛出遇到的错误
# set -e

# git 提交本地文件
commit_info=`git describe --all --always --long`

git add .
git commit -m "deploy, $commit_info"
git push 


