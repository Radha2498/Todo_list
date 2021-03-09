import React , {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri';
// import {TiEdit} from 'react-icons/ti';

                 


function Todo( {todos, completeTodo , removeTodo , updateTodo}){                                               
    const [edit,setEdit] = useState({
        id:null,
        value:''
    });
       
  
    const submitUpdate = value =>{
        updateTodo(edit.id, value);
        setEdit({
            id :null,
            value:''
        });
    } ;

    if (edit.id){
        return <TodoForm edit={edit} onSubmit = {submitUpdate} />
    }

    function shoot() {
        alert("Your todo is added in priority");
      }

                         

    return todos.map((todo,index)=>(
        <div className ={todo.isComplete ? 'todo-row complete':                                               //complete todo
        'todo-row'} key={index}>

       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
           {todo.text}
       </div>

        <div className ="icons">
        <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}
        className='delete-icon' />
        {/* <TiEdit onClick={()=>setEdit({id:todo.id , value:todo.text})} 
        className='edit-icon'/> */}

       
          <p>
         <button type="button" class="btn btn-default btn-sm" onClick={shoot}>
          <span class="glyphicon glyphicon-star"></span> 
        </button>
      </p>    


        </div>
        </div>

    ))
}

export default Todo