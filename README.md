##how it works

if you visit /about, you’ll create a context object with three properties:
appName, userAgent, and currentUser.
that's because by app.locals.appName, app.locals.userAgent, `{currentUser:'Fabian123'}`

If you don’t supply a file extension (as with about in the previous step) Express appends
the default you specify. In this case, “about” becomes about.jade but contact.ejs
and 404.html stay the same. If you don’t supply an extension and don’t supply a
default view engine, Express will throw an error. Otherwise, it’ll continue on.

Express looks at your file extension to determine which engine to use.

###other templates

Consolidate.js (https://github.com/tj/consolidate.js), a library that wraps a
ton of view engines to be compatible with Express. It has support for the classics like
EJS, Pug, Mustache, Handlebars, and Hogan. It supports a ton of others, too, in case
you’re using a more obscure/hipster view engine. You can see the whole list of supported engines on the project’s page.

```javascript
  var express = require("express");
  var engines = require("consolidate");
  var path = require("path");
  var app = express();

  app.set("view engine", "wal");
  app.engine("wal", engines.walrus);
  app.set("views", path.resolve(__dirname, "views"));

  app.get("/", function(req, res) {
  res.render("index"); });
  app.listen(3000);
```
