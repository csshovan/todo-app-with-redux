import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/action';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

const Todo = () => {
    const [newTodoText,setNewTodoText] = useState("");
    const [searchTerm,setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = (text) =>{
        dispatch(addTodo(text))
    }
    const handleAddToClick= () =>{
        if(newTodoText.trim()!== ''){
            handleAddTodo(newTodoText.trim());
            setNewTodoText('');
        }
    }

    const handleSearchChange = (value) =>{
        setSearchTerm(value);
        dispatch(updateSearchTerm(value))
    }
    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO App</h2>
            <div className='flex items-center'>
                <input value={newTodoText} onChange={(e)=>setNewTodoText(e.target.value)} type="text" name='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
                <button onClick={handleAddToClick} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'><FaPlus /></button>
            </div>


            {/* filter and serach */}
            <div className='flex justify-between mt-4'>
               
               <FilterButton></FilterButton>

            <div className='flex items-center'>
                <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" name='todosearch' placeholder='search' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
               
            </div>
            </div>

            <TodoList></TodoList>
        </div>
    );
};

export default Todo;