angular-inject
==============

This small helper for angular dependency injector helps to declare needed services using a neat syntax.

```
angular.module('exampleModule', [])
    .controller('HelloController', function($window) {
        $window.alert('Hello World!');
    }.inject('$window'))
;
```
