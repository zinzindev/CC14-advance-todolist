import { useState, useEffect, createContext } from 'react';
import * as TodoAPIServices from '../services/todoServices';

// สร้าง
// Create Context => Context Object(NAME)
// ใช้
// #1 Provider : Component Shared Data, Logic ได้ (Wrapper Component)
// #2 Consumer : Component ที่ต้องการใช้ Data, Logic (Subscribe Component)

export const TodoContext = createContext();

// สร้าง Provider : Wrapper Component
function TodoContextProvider(props) {
	// console.log('props.chidren: ', props.children);

	const [todos, setTodos] = useState([]);
	const [todosFilter, setTodosFilter] = useState([]);

	// GET : FETCH
	async function fetchAllTodos() {
		try {
			// #1 : Sync with External Service
			const response = await TodoAPIServices.getAllTodos();

			// #2 : Sync with Internal State
			setTodos(response.data.todos);
			setTodosFilter(response.data.todos);
		} catch (error) {
			// #3 Error Handler
			console.log(error.response.status);
		}
	}

	useEffect(() => {
		fetchAllTodos();
	}, []);

	// POST : Add
	const addTodo = async (task) => {
		console.log('task: ', task);
		try {
			// #1 Sync With External State/Service : Database
			const now = new Date().toISOString().slice(0, 10);
			const newTodoObj = { task: task, status: false, date: now };
			console.log('newTodoObj: ', newTodoObj);
			const response = await TodoAPIServices.createTodo(newTodoObj);
			const createdTodoObj = response.data.todo;

			// #2 Sync with Internal State : UI State
			const newTodoLists = [createdTodoObj, ...todos];
			// NOTE : not concern about time yet! todo for today can appear in next 7 days lists
			setTodos(newTodoLists);
			setTodosFilter(newTodoLists);
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	const sharedObj = { magic: 9, todos: todos, todosFilter: todosFilter, addTodo: addTodo }; // ต้อง share เป็น object
	// retrun jsx
	return <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>;
}

export default TodoContextProvider;
