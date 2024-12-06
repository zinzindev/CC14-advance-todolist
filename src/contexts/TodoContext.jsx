import { useState, useEffect, createContext, useReducer } from 'react';
import * as TodoAPIServices from '../services/todoServices';
import { getSevenDayRange } from '../utils/DateUtils';
import todoReducer from '../reducer/todoReducer';
import { INIT_TODO } from '../reducer/todoReducer';
import { FETCH_TODO } from '../reducer/todoReducer';

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

	// USE_REDUCER: ครูตุดตู่กับตรูเต้คุยกันรู้เรื่อง
	// Param1: ใครเป็นคนสรุป -> ครูเต้ == todoReducer
	// Param2: state ตั้งต้น?
	// const [state, dispatch] = useReducer(todoReducer, INIT_TODO);
	const [allTodoList, dispatch] = useReducer(todoReducer, INIT_TODO);
	// Return1: arr[0]: State(init, update)
	// Return2: arr[1] dispatch Functin: สมุดใบสั่ง
	// console.log('allTodoList: ', allTodoList);
	console.log('STATE: ', allTodoList);
	// console.log('dispatch: ', dispatch);

	// GET : fetch
	async function fetchAllTodos() {
		try {
			// #1 : Sync with External Service
			const response = await TodoAPIServices.getAllTodos();

			// #2 : Sync with Internal State
			// setTodos(response.data.todos);
			// setTodosFilter(response.data.todos);

			// #2-Alternative: ออกใบสั่ง
			// let dispatchObj = { type: FETCH_TODO, payload: { todos: response.data.todos } };
			// dispatch(dispatchObj);
			dispatch({ type: FETCH_TODO, payload: { todos: response.data.todos } });
		} catch (error) {
			// #3 Error Handler
			console.log(error.response.status);
		}
	}

	useEffect(() => {
		fetchAllTodos();
	}, []);

	// POST : add
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

	// PUT : edit
	const editTodo = async (todoId, updateObj) => {
		// #1 Sync With External State/Service : Database
		// #2 Sync with Internal State : UI State
		// #3 Error Handler eg. modal Error, Sweat Alert

		try {
			// #1 Sync With External State/Service : Database
			// const response = await axios.put(`http://localhost:8080/todos/${todoId}`, updateObj);
			const response = await TodoAPIServices.updateTodo(updateObj);
			const updatedTodoObj = response.data.todo;

			// #2  Sync with Internal State : UI State
			const foundedIndex = todos.findIndex((todo) => todo.id === todoId);
			if (foundedIndex !== -1) {
				const newTodoLists = [...todos];
				// newTodoLists[foundedIndex] = { ...newTodoLists[foundedIndex], ...updatedTodoObj };
				newTodoLists[foundedIndex] = Object.assign(
					{},
					newTodoLists[foundedIndex],
					updatedTodoObj
				);
				setTodos(newTodoLists);
				setTodosFilter(newTodoLists);
			}
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	// DELETE : delete
	const deleteTodo = async (todoId) => {
		// #1 Sync With External State/Service : Database
		// #2 Sync with Internal State : UI State
		// #3 Error Handler eg. modal Error, Sweat Alert
		try {
			// #1 Sync With External State/Service : Database
			// await axios.delete(`http://localhost:8080/todos/${todoId}`)
			await TodoAPIServices.deleteTodo(todoId);

			// #2 Sync with Internal State : UI State
			const newTodoLists = todos.filter((todo) => todo.id !== todoId);
			setTodos(newTodoLists);
			setTodosFilter(newTodoLists);
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	// FILTER BY LISTS
	const selectList = (selectedIndex) => {
		const [today, nextSevenDay] = getSevenDayRange();
		if (selectedIndex === 0) {
			setTodosFilter(todos);
		} else if (selectedIndex === 1) {
			const newTodo = todos.filter((todo) => todo.date === today);
			setTodosFilter(newTodo);
		} else if (selectedIndex === 2) {
			const newTodo = todos.filter((todo) => todo.date >= today && todo.date <= nextSevenDay);
			setTodosFilter(newTodo);
		}
	};

	// SEARCH TODO
	const searchTodo = (searchValue) => {
		const newTodo = todos.filter((todo) =>
			todo.task.toLowerCase().includes(searchValue.toLowerCase())
		);
		setTodosFilter(newTodo);
	};

	// const sharedObj = {
	// magic: 9,
	// todos: todos,
	// todosFilter: todosFilter,
	// addTodo: addTodo,
	// editTodo: editTodo,
	// deleteTodo: deleteTodo,
	// selectList: selectList,
	// searchTodo: searchTodo,

	// SHORT HAND
	// todos,
	// todosFilter,
	// addTodo,
	// editTodo,
	// deleteTodo,
	// selectList,
	// searchTodo,
	// }; // ต้อง share เป็น object

	// Retrun JSX
	// return <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>;
	return (
		<TodoContext.Provider
			value={{
				todos: allTodoList.todos,
				todosFilter: allTodoList.todosFilter,
				addTodo,
				editTodo,
				deleteTodo,
				selectList,
				searchTodo,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export default TodoContextProvider;
