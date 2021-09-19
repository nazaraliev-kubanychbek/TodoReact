import React from 'react';

const Todo = ({todoArr, setTodoArr, status}) => {
    const completedTodo = (id) => {
        setTodoArr(todoArr.map((item, idx) => {
            if (item.id === id) {
                return {...item, isCompleted: !item.isCompleted, isActive: !item.isActive}
            } else {
                return item
            }
        }));
    };
    const deleteTodo = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {...item, isDeleted: !item.isDeleted}
            } else {
                return item
            }

        }))

    };
    const removeTodo = (id) =>{
       setTodoArr(todoArr.filter((item)=>{
           return item.id !== id
       }))
    };
    const important = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {...item, isImportant: !item.isImportant}
            } else {
                return item
            }

        }))
    };
    const changeTodo = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {...item, isChange: !item.isChange}
            } else {
                return item
            }
        }))

    };
    return (
        <ul className="todoList__menu">
            {todoArr.filter((item, idx) => {
                if (status === 'active') {
                    return !item.isCompleted && !item.isDeleted
                } else if (status === 'completed') {
                    return item.isCompleted && !item.isDeleted
                } else if (status === 'recent') {
                    return item.isDeleted
                } else {
                    return item && !item.isDeleted
                }
            }).map((item, idx) => {
                return <li className="todoList__item" key={item.id}>
                    <div className='todoList__left'>
                        <button type='button'
                                className={`todoList__item-btn ${item.isCompleted ? 'todoList__item-btn_active' : ''}`}
                                onClick={(e) => completedTodo(item.id)}> </button>
                        {item.isChange
                            ? <textarea className='todoList__textarea' defaultValue={item.name} onChange={(e) =>
                                item.name = e.target.value}/>
                            : <span className={`todoList__text  ${item.isCompleted ? 'todoList_text_active' : ''} 
                            ${item.isImportant ? 'todoList__text todoList__text-important' : ''}`}>{item.name}</span>}

                    </div>
                    <div className='todoList__right'>
                        {item.isChange ? <button type='button' className='todoList__save'
                                                 onClick={() => changeTodo(item.id)}>save</button> : ''}
                        {status === 'recent' ? '' : !item.isChange && status !== 'completed'
                            ? <button type='button' className='todoList__edit-btn' onClick={() => changeTodo(item.id)}>
                                <i className="fas fa-edit"> </i>
                            </button>
                            : ''
                        }

                        {status === 'recent' ? '' :
                            <button className={`todoList__btn todoList__btn_important ${item.isImportant
                                ? 'todoList__btn_important-active' :
                                ''
                            }`} type='button' onClick={() => important(item.id)}>Important</button>}

                        <button className={`todoList__btn ${status === 'recent' ? 'todoList__btn_return': 'todoList__btn_delete'}`} type='button'
                                onClick={() => deleteTodo(item.id)}>{status === 'recent' ? 'return' : 'remove'}</button>
                        {status === 'recent' ? <button className='todoList__btn todoList__btn_delete' type='button' onClick={()=> removeTodo(item.id)}>Delete</button>: '' }
                    </div>
                </li>

            })}

        </ul>
    );

};


export default Todo;