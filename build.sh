# Build production version to ./prod

set -e

echo "======================================================================="
echo "== Building production version"
echo "======================================================================="

lein prod

echo "======================================================================="
echo "== Staging to ./prod folder"
echo "======================================================================="

rm -fr prod
mkdir -p prod/js prod/css
cp -r ./resources/static/* prod
cp -r ./target/prod/* prod

echo "======================================================================="
echo "== Ready, prod version ready for testing, open ./prod/index.html"
echo "======================================================================="

exit 0
