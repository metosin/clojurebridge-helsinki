# ClojureBridge - Helsinki

This is gh-pages project for ClojureBridge Helsinki event.

## Develop

```bash
lein develop
```

Open browser at ```http://localhost:3499/index.html```

## Deployment

Test production build:

```bash
./build.sh
```

This builds production version to project root (that's where gh-pages looks for it). Open
and test ```index.html``` file.

Actual deployment:

```bash
git add your-changes-here
git commit -m you-message-here
git checkout gh-pages
git merge master
./build.sh
```

Now would be great time to test the build. Open ```index.html``` from the project root. If
everything looks ok, then proceed with:

```basg
git add index.html js css img
git commit -m some-meaningfull-message
git push
git checkout master
```

And we're done and back in master. Check you results at http://clojurebridge-helsinki.metosin.fi/

## License

Copyright © 2015 Metosin Oy

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
