'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-backbone-starter:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'assets/logo.png',
      'css/_app.scss',
      'css/_reset.scss',
      'css/_vars.scss',
      'css/main.css',
      'css/main.scss',
      'gulpfile.js',
      'humans.txt',
      'index.html',
      'js/main.js',
      'js/main.min.js',
      'js/utils.js',
      'js/libs/jquery.min.js'.
      'js/libs/underscore.min.js',
      'js/libs/backbone.min.js',
      'js/init.js',
      'js/models.js',
      'js/views.js',
      'LICENSE',
      'manifest.json',
      'README.md',
      'robots.txt',
      'sw.js'
    ]);
  });
});
