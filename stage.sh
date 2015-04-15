# Build and prepare for deploymet

./stage.sh

echo "======================================================================="
echo "== Copying prod to root for gh-pages"
echo "======================================================================="

cp -r prod/* .
git add index.html js css img shim

echo "======================================================================="
echo "Ready:"
echo "  - open ./index.html in browser"
echo "  - see that it works"
echo "  - commit and push to gh-pages branch"
echo "======================================================================="

exit 0
