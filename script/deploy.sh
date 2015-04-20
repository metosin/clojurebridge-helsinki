#!/bin/bash

target=gh-pages
rev=$(git rev-parse HEAD)
remoteurl=$(git ls-remote --get-url origin)

git fetch
if [[ -z $(git branch -r --list origin/gh-pages) ]]; then
    (
    mkdir $target
    cd $target
    git init
    git remote add origin ${remoteurl}
    git checkout -b gh-pages
    git commit --allow-empty -m "Init"
    git push -u origin gh-pages
    )
elif [[ ! -d $target ]]; then
    git clone --branch gh-pages ${remoteurl} $target
else
    (
    cd $target
    git pull
    )
fi

./script/build.sh

cd $target

git add --all
git commit -m "Build site from ${rev}"
git push origin gh-pages
