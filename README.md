fsexists
========

Wraps `fs.access` and  `fs.accessSync` to provide `fsexists.exists` and `fsexists.existsSync`


install
-------

`npm install fsexists`


use
---

```
require('fsexists').exists('/some/path', function(exists) {
    console.log('file', (exists ? 'exists' : 'does not exist'));
});
```


license
-------
ISC
