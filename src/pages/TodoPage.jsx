// import React from 'react';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { TodoContent } from '../components/Todo/TodoContent';
import TodoContextProvider from '../contexts/TodoContext';
// import { BrowserRouter } from 'react-router-dom';

function TodoPage() {
	return (
		<TodoContextProvider>
			<div className='container'>
				<Header />
				<SideBar />
				<TodoContent />
			</div>
		</TodoContextProvider>
	);
}

export default TodoPage;
