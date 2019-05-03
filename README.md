# ToDo app developed with [Wu framework](https://github.com/migueldelmazo/wu)
[![Wu](https://raw.githubusercontent.com/migueldelmazo/wu/master/resources/wu-logotype-03.png)](https://github.com/migueldelmazo/wu)

This repository is an example of a **ToDo app** developed with
[Wu](https://github.com/migueldelmazo/wu) and [Wu React JS](https://github.com/migueldelmazo/wu-reactjs).

In this example are used:

* Wu:
  * [Ensurer item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-ensurer.md)
  * [Router item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-router.md)
  * [Getter item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-getter.md)
  * [Setter item](https://github.com/migueldelmazo/wu/blob/master/docs/documentation-setter.md)
* Wu React JS:
  * [`onChange():`](https://github.com/migueldelmazo/wu-reactjs#onchange) auto render method.
  * [`this.onEv('setState', 'newItem')`:](https://github.com/migueldelmazo/wu-reactjs#onev) to run a view method.
  * [`this.onEv('addTodo', '#state.newItem')`:](https://github.com/migueldelmazo/wu-reactjs#onev) to run a Wu setter with state value.
  * [`this.onEv(['addTodo', '#state.newItem'], ['setState', 'newItem', ''])`:](https://github.com/migueldelmazo/wu-reactjs#onev) to execute several methods followed.
  * [`this.getClassName()`:](https://github.com/migueldelmazo/wu-reactjs#getclassname) to render a class name easily.

## Setup and start

```bash
$ npm install
$ npm start
```
