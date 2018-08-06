![logo-stash-it-color-dark 2x](https://user-images.githubusercontent.com/1819138/30385483-99fd209c-98a7-11e7-85e2-595791d8d894.png)

# stash-it-plugin-readOnly

[![build status](https://img.shields.io/travis/smolak/stash-it-plugin-readOnly/master.svg?style=flat-square)](https://travis-ci.org/smolak/stash-it-plugin-readOnly)
[![Coverage Status](https://coveralls.io/repos/github/smolak/stash-it-plugin-readOnly/badge.svg?branch=master)](https://coveralls.io/github/smolak/stash-it-plugin-readOnly)


Read-only plugin for [stash-it](https://www.npmjs.com/package/stash-it).

## The problem

Let's say you need to have an instance of stash-it that is only capable of reading
from the storage, but not writing, changing or deleting anything.

## Solution

This plugin will allow you to do just that. And if anyone will try to write / delete something,
an error will be thrown.

## Installation

```sh
npm i stash-it-plugin-readonly --save
```

## Usage

```javascript
import { createCache } from 'stash-it';
import createReadOnlyPlugin from 'stash-it-plugin-readonly';

// You can use any adapter
import createMemoryAdapter from 'stash-it-adapter-memory';

const cacheInstance = createCache(createMemoryAdapter());

const readOnlyPlugin = createReadOnlyPlugin();
const readOnlyCacheInstance = cacheInstance.registerPlugins([ readOnlyPlugin ]);

// This will work
readOnlyCacheInstance.hasItem('key');

// But this will throw
readOnlyCacheInstance.removeItem('key');

// or this
readOnlyCacheInstance.setItem('key', 'value');
```

Methods that will throw are: **setItem**, **addExtra**, **setExtra** and **removeItem**.
All other will work just fine.


