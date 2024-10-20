// import { useContext } from 'react';
// import { TodoContext } from '../../contexts/TodoContext';

import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';

export function TodoContent() {
	// HOOK-AREA : state, Effect, Context
	// const sharedObj = useContext(TodoContext);
	// console.log('TodoContent', sharedObj);

	return (
		<main className='content'>
			<TodoHeader />
			<AddTodo />
			<TodoLists />
		</main>
	);
}
