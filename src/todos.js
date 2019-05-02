import wu from 'wu'

/**
 * Set initial data when app is ready into 'todos'
 */
wu.create('ensurer', 'initTodos', {
  onChange: 'app.ready',
  run: () => ({
    items: [],
    filter: 'all'
  }),
  update: 'todos'
})

/**
 * Add a ToDo item into 'todo.items'
 * @param {string} newItem New ToDo item
 */
wu.create('setter', 'addTodo', {
  args: ['todos.items'],
  run: (items, newItem) => {
    if (newItem) {
      items.push({
        text: newItem,
        completed: false
      })
    }
    return items
  },
  update: 'todos.items'
})

/**
 * Listen URL and update 'route.filter'
 */
wu.create('router', 'filterRouter', {
  urlPattern: '/filter/:filter',
  update: 'router.filter'
})

/**
 * Watch 'route.filter' and ensure 'todos.filter'
 */
wu.create('ensurer', 'setFilter', {
  onChange: 'router.filter',
  args: 'router.filter.params.filter',
  run: (urlFilter) => urlFilter === 'completed' || urlFilter === 'pending' ? urlFilter : 'all',
  update: 'todos.filter'
})

/**
 * Toggle item completed value
 * @param {Number} itemIndex Item index
 */
wu.create('setter', 'toggleItem', {
  args: ['todos.items'],
  run: (items, itemIndex) => {
    if (itemIndex >= 0 && itemIndex < items.length) {
      items[itemIndex].completed = !items[itemIndex].completed
    }
    return items
  },
  update: 'todos.items'
})

/**
 * Remove item
 * @param {Number} itemIndex Item index
 */
wu.create('setter', 'removeItem', {
  args: ['todos.items'],
  run: (items, itemIndex) => {
    if (itemIndex >= 0 && itemIndex < items.length) {
      items.splice(itemIndex, 1)
    }
    return items
  },
  update: 'todos.items'
})

/**
 * Returns items
 * @returns {Array} Items like [{ text, completed, visible }]
 */
wu.create('getter', 'getItems', {
  args: ['todos.items', 'todos.filter'],
  run: (items, filter) => {
    items = items || []
    return items.map((item) => {
      if (filter === 'completed') {
        item.visible = item.completed === true
      } else if (filter === 'pending') {
        item.visible = item.completed === false
      } else {
        item.visible = true
      }
      return item
    })
  }
})
