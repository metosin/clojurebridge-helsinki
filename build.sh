# Build production version to ./prod

set -e

echo "======================================================================="
echo "== Building production version"
echo "======================================================================="

lein prod

echo "======================================================================="
echo "== Staging prod version"
echo "======================================================================="

./clean.sh

echo "======================================================================="
echo "== Copying prod to root for gh-pages"
echo "======================================================================="

cp -r ./resources/static/* .

mkdir js css
cp ./target/prod/js/app.js ./js
cp ./target/prod/css/styles.css ./css

echo "======================================================================="
echo "== Ready, prod version ready for testing, open ./prod/index.html"
echo "======================================================================="

exit 0
