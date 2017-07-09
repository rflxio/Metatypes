[![Build Status](https://travis-ci.org/Denis Yaremov/Metatypes.svg?branch=master)](https://travis-ci.org/Denis Yaremov/Metatypes)
[![Coverage Status](https://coveralls.io/repos/github/Denis Yaremov/Metatypes/badge.svg?branch=master)](https://coveralls.io/github/Denis Yaremov/Metatypes?branch=master)

# Reflex

This project is aimed at defining well described type metadata for javascript / typescript

# Stacks
- **unit test**: mocha, chai
- **code coverage**: nyc, wallabyjs(optional)
- **ci**: travis

# How to use?

# Commands list
````
yarn test           // run test(mocha) and coverage report(nyc)
yarn test:watch     // run test on watch mode (without coverage report)
yarn build          // build for both esm (ES5 + ES2015 module) and ES5 UMD bundle, at dist folder.
yarn lint           // run lint against lib and test
````

# Testing

This boilerplate use Mocha as test framework. Wallaby.js is just supplementary for development.
Delete the wallaby.js if you don't want to use it.

# Reference

# License
MIT
