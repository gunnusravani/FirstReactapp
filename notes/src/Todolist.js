import React from "react"
import TodoListItem from './TodoListItems'
import './Styles.css'
export default class Todolist extends React.Component
{  state={
    list_title: '',
    current_value: '',
    todos: [
      
    ]
}
    render(){
        return(
            <div class="todo-list">
                <h2>todo list..</h2>
                <label>Title</label>
                <br />
                <input 
                placeholder="Enter title...." 
                type ="text" 
                value={this.state.list_title} 
                onChange={(event)=> {this.setState({list_title: event.target.value})}}
                />
                 <br/>
                 {
                    this.state.todos.map(todo =>
                        {
                            return (
                               <TodoListItem title={todo.title} completed={todo.completed} />
                            )
                        })
                 }
                 <input 
                 placeholder="Todo Item Name...." 
                 type ="text" 
                 value={this.state.current_value}
                 onChange={(event)=> { this.setState({current_value: event.target.value})}}
                 
                 />

                 <button 
                 onClick={()=> 
                 {this.setState( prevState =>
                  ({todos: prevState.todos.concat({title: this.state.current_value, completed:false }
                    ),
                    current_value:''
                 })
                  )
                }
                  }>Add item to list </button>
            </div>
        )
    }
}