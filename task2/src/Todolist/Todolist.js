import React, { Component } from 'react';
import Header from './header'
import Body from './body'
import Footer from './footer' 

class Todolist extends Component {
  constructor() {
    super()
    this.state = {
      todo: {
        list: [],
        add: (item) => {
          this.setState(preState => {
            let newTodo = preState.todo
            let list = Object.assign([], newTodo.list)
            list.push({
              text: item,
              id: new Date().getTime(),
              status: 'working'
            })
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        delete: (id) => {
          this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.filter(item => id !== item.id)
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        finish: (id) => {
          this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.map(item => {
              if(item.id === id) {
                item.status = 'finished'
              }
              return item
            })
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        clear: () => {
          this.setState(preState => {
            let newTodo = preState.todo
            newTodo.list = []
            return {
              todo: newTodo
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <div >
        <Header todo={this.state.todo}></Header>
        <Body todo={this.state.todo}></Body>
        <Footer clear={this.state.todo.clear}></Footer>
      </div>
    );
  }
}

export default Todolist;
