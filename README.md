# ClojureBridge - Helsinki

This is gh-pages project for ClojureBridge Helsinki event.

## Develop

```bash
lein develop
```

Open browser at ```http://localhost:3499/index.html```

## Deployment

Actual deployment:

```bash
./script/deploy.sh
```

This will clone/pull the gh-pages branch to gh-pages directory
and build the new versions to the directory. If any changes happen,
they will automatically we commited and pushed to github.

Check you results at http://clojurebridge.fi/

If you want to locally test the results you can run `./script/build.sh`,
but it will require that you have already cloned the gh-pages branch to the
directory.

## License

Copyright © 2015 Metosin Oy

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
