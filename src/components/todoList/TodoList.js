import React from 'react';
import Todo from '../todo/Todo';
import TodoFooter from "../todoFooter/TodoFooter";
const TodoList = ({todoArr, setTodoArr, status, setStatus, setTodoName}) => {
    return (
        <div className="container">
            <div className="todoList">
                {todoArr.filter((item)=> !item.isDeleted).length === 0 && status === 'all'
                    ? <p className='todoList__notTodo'>Здесь будут ваши задания</p>
                    : todoArr.filter((item)=> item.isCompleted && !item.isDeleted).length === 0 && status === 'completed' ? <p className='todoList__notTodo'>Здесь будут ваши выполненные задания</p>
                        : todoArr.filter((item)=> !item.isCompleted && !item.isDeleted).length === 0 && status === 'active' ? <p className='todoList__notTodo'>Здесь будут ваши активные задания</p>
                            : todoArr.filter((item)=> item.isDeleted).length === 0 && status === 'recent' ?  <p className='todoList__notTodo'>Здесь будут ваши недавно удалёныечё задания</p>
                    : <Todo todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus}/>
                }
                <TodoFooter todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus} setTodoName={setTodoName}/>

            </div>
        </div>
    );
};


export default TodoList;