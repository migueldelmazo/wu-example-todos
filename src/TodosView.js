import React from 'react'
import WuReact from 'wu-reactjs'

export default class TodosView extends WuReact.Component {

  onChange() {
    // auto render when 'todos' model property changes
    return 'todos'
  }

  initialState() {
    return {
      newItem: ''
    }
  }

  renderHeader() {
    return (
      <div className='row'>
        <div className='col'>
          <h1>ToDo list</h1>
        </div>
      </div>
    )
  }

  renderNewItemInputs() {
    return (
      <div className='col-3'>
        <h3>Add item</h3>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='New item'
            type='text'
            value={ this.state.newItem }
            onChange={ this.onEv('setState', 'newItem') }
          />
        </div>
        <div className='form-group'>
          <button
            className='btn btn-primary'
            type='submit'
            onClick={ this.onEv(['addTodo', '#state.newItem'], ['setState', 'newItem', '']) }
          >
            Add item
          </button>
        </div>
      </div>
    )
  }

  renderFilters() {
    return (
      <div className='col-2'>
        <h3>Filters</h3>
        <a
          className='btn btn-primary'
          href='/'
        >All</a>
        <br/>
        <a
          className='btn btn-primary'
          href='/filter/completed'
        >Completed</a>
        <br/>
        <a
          className='btn btn-primary'
          href='/filter/pending'
        >Pending</a>
      </div>
    )
  }

  renderItems() {
    return (
      <div className='col-7'>
        <h3>Items</h3>
        <ul className='list-group'>
          { this.renderItemsLi() }
        </ul>
      </div>
    )
  }

  renderItemsLi() {
    return this.get('getItems').map((item, idx) => {
      return (
        <li
          key={ idx }
          hidden={ !item.visible }
          className={ this.getClassName(item.completed, 'list-group-item-dark strike', '', 'list-group-item ') }
        >
          <div className='row'>
            <span className='col-6'>{ item.text }</span>
            <button
              className='btn btn-primary col-3'
              onClick={ this.onEv('toggleItem', idx) }
            >
              Toggle
            </button>
            <button
              className='btn btn-danger col-3'
              onClick={ this.onEv('removeItem', idx) }
            >
              Remove
            </button>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='container'>
        { this.renderHeader() }
        <div className='row'>
          { this.renderNewItemInputs() }
          { this.renderFilters() }
          { this.renderItems() }
        </div>
      </div>
    )
  }

}
