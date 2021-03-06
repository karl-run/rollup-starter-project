# See [rollup-starter-lib-react](https://github.com/karl-run/rollup-starter-lib-react) for a simpler, up-to-date example of how to create a library component with Rollup

---

# rollup-starter-project-react

This package shows how to get started with [rollup][rollup] (and [babel][babel]) for writing
npm packages using ES6 modules for writing React components. Writing npm packages with a [jsnext:main][jsnext:main] allows
users of your package to choose whether they use it using the traditional
`require` function understood by node.js, or using the `import` statement added
in ES6 which can result in smaller bundles through live-code inclusion static
analysis.

[babel]: https://github.com/babel/babel
[jsnext:main]: https://github.com/rollup/rollup/wiki/jsnext:main
[rollup]: https://github.com/rollup/rollup

## Usage

You can simply use this project as inspiration for how to configure your own,
or clone it and edit the metadata files when starting your own project (i.e.
README.md, package.json, and LICENSE).

### lib/index.js

This is the main source file in your application, and the main file you'll start
editing to implement the functionality of your package. As shown in this
example, you can `import` other files from this file similarly to how you would
`require` packages typically (e.g. `lib/utils.js`).

### test/index.test.js

This is the starting point for tests in your package. You should import the
code to test from `lib/` as shown in the example. The project is already
configured to use mocha when you run `npm test`.

### dist/rollup-starter-project.js

This is the `main` file of the package and includes all the code needed to run
your package. It is in UMD format, meaning it can be used in most JavaScript
runtime environments. If your package has dependencies you do not want bundled,
be sure to configure rollup to exclude them by marking them as `external`. By
default all `dependencies` entries in your `package.json` will be `external`.

### dist/rollup-starter-project.mjs

This is the `jsnext:main` file of the package and includes all the code needed
to run your package. Compared to the UMD version, this one preserves ES6 imports
and exports at the package boundary for tools that support it (such as rollup).
If your package has dependencies you do not want bundled, be sure to configure
rollup to exclude them by marking them as `external`. By default all
`dependencies` entries in your `package.json` will be `external`.

### .eslintrc

This controls how the package is linted and starts off with the recommended set
of rules from eslint itself. It also uses `babel-eslint` to parse your code,
allowing syntax that the standard eslint parser may not understand (e.g. type
annotations).

## Dependencies

This section explains what all the dependencies are and what they're for, so
you can decide which ones you actually need.

### babel-eslint

Enables eslint to understand all JavaScript syntax that
[babel](http://babeljs.io) understands, and adds a few rules for linting ES2015
code. This can be removed if you plan not to use babel to transform ES2015 code
to ES5 or if you plan not to use eslint.

### babel-plugin-external-helpers

Ensures that only one copy of each babel helper is included in the bundle when
used with rollup. This can be removed if you plan not to use babel to transform
ES2015 code to ES5.

### babel-preset-es2015

Used when babel is used without rollup, and referenced by the `.babelrc` file.
This can be removed if you plan not to use babel to transform ES2015 code to ES5
or you plan to specify all the babel plugins manually.

### babel-register

Provides on-demand transpilation via babel so no precompilation is required.
This is used in the tests to allow running them without compiling first, and is
referenced in `test/mocha.opts`.

### babelrc-rollup

Handles transforming the babel config from `.babelrc` to one suitable for use
with `rollup-plugin-babel`, where you don't want to use any module plugins.

### eslint

[eslint](http://eslint.org) checks your code for common errors and ensures it
adheres to the style you configure in `.eslintrc`. You can remove this if you
plan not to lint your code or if you're using another linter, such as
[jshint](http://jshint.com) or [jscs](http://jscs.info).

This build is also configured by default to use the airbnb set of lint rules. The 
following dependencies are used for that: 

* eslint-config-airbnb
* eslint-plugin-jsx-a11y
* eslint-plugin-import
* eslint-plugin-react

### jest

[jest](https://facebook.github.io/jest/) is a test runner. You can remove this if you plan
not to write tests (don't do that!) or if you plan to use another test runner
such as [Jasmine](http://jasmine.github.io).

### enzyme

[enzyme](https://github.com/airbnb/enzyme) "Enzyme is a JavaScript Testing utility for 
React that makes it easier to assert, manipulate, and traverse your React Components' output."
You don't need this if you're not testing React components.

### rollup

[rollup](http://rollupjs.org) is a JavaScript module bundler and the reason
you're looking at this project in the first place, so you probably don't want
to remove this dependency.

### rollup-plugin-babel

This plugin enables support for [babel](http://babeljs.io), which transforms
ES2015 code to ES5. You can remove this if you plan not to use ES2015 code.

## Contributing

If you think a project built with rollup should be set up differently, open an
issue to discuss it or create a pull request.
