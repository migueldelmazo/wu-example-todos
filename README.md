# React JS module for [Wu framework](https://github.com/migueldelmazo/wu)

This repository is an example of a **ToDo app** developed with
[Wu](https://github.com/migueldelmazo/wu) and [Wu React JS](https://github.com/migueldelmazo/wu-reactjs).

In this example are used:

* Wu:
  * [Ensurer item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-ensurer.md)
  * [Router item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-router.md)
  * [Getter item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-getter.md)
  * [Setter item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-setter.md)
* Wu React JS:
  * `onChange()`: auto render method.
  * `this.onEv('setState', 'newItem')`: to run a view method.
  * `this.onEv('addTodo', '#state.newItem')`: to run a Wu setter with state value.
  * `this.onEv(['addTodo', '#state.newItem'], ['setState', 'newItem', ''])`: to execute several methods followed.

## Setup and start

```bash
$ npm install
$ npm start
```
