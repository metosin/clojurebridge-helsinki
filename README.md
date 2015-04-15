# ClojureBridge - Helsinki

This is gh-pages project for ClojureScript Helsinki event.

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

If all looks good, then:

```bash
git add your changes
git commit -m message
git checkout gh-pages
git merge master
./build.sh
git add index.html js css img
git commit -m message
git push
git checkout master
```

## License

Copyright © 2015 Metosin Oy

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
