import React from 'react';
import { useSelector } from 'react-redux';
import TodoItems from './TodoItems';

const TodoList = () => {
    const filteredTodos = useSelector((state)=>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;
        return todos.filter((todo)=>{
            const matchesFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === 'ALL');
            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);
            return matchesFilter && matchesSearch;
        
        })
    })

    console.log(filteredTodos);
    return (
        <div>
            <ul>
                <li className='my-2 text-sm italic'>All Your Note Here...</li>
                {
                    filteredTodos.map((todo,index)=>(
                       <TodoItems key={index} todo={todo} index={index}></TodoItems>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;