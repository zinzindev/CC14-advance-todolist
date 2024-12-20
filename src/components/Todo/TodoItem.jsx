// import { useState, useContext } from 'react'; //#1
import { useState } from 'react'; //#1

import styles from './TodoItem.module.scss';

// import { TodoContext } from '../../contexts/TodoContext'; //#2
import { useTodo } from '../../hooks/useTodo';
import { TodoForm } from './TodoForm';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { convertDate } from '../../utils/DateUtils';

// let count = 0;

export function TodoItem({ todo }) {
	// console.log('todo: ', todo);
	// count += 1;
	// console.log('count: ', count);
	// console.log('----------------------------------------------------------------');

	// ** Consume
	// const { editTodo, deleteTodo } = useTodo();
	// const sharedObj = useContext(TodoContext); //#3
	// const editTodo = sharedObj.editTodo; //#4
	// const deleteTodo = sharedObj.deleteTodo; //#5

	// const { editTodo, deleteTodo } = useContext(TodoContext);
	const { editTodo, deleteTodo } = useTodo();

	// state
	const [isEdit, setIsEdit] = useState(false);

	const handleClickEditIcon = () => setIsEdit(true);

	const handleClickCheckBox = () => {
		editTodo(todo.id, { ...todo, status: !todo.status }); // **
		console.log('todo: ', todo);
	};

	const handleClickDeleteBox = () => {
		deleteTodo(todo.id);
	};

	return (
		<>
			{!isEdit ? (
				<li className={styles.todo__item__container}>
					<div className={styles.checkbox__container} onClick={handleClickCheckBox}>
						<HiCheck
							className={`${todo.status ? styles.checkbox__icon__done : styles.checkbox__icon}`}
						/>
					</div>
					<p className={`${todo.status && styles.done}`}>{todo.task}</p>
					<span className={styles.date__text}>{todo.date && convertDate(todo.date)}</span>
					<div className={styles.edit__icon} onClick={handleClickEditIcon}>
						<HiPencil />
					</div>

					<div className={styles.delete__icon} onClick={handleClickDeleteBox}>
						<HiTrash />
					</div>
				</li>
			) : (
				<TodoForm textConfirm='Edit task' onSetShow={setIsEdit} oldTodo={todo} />
			)}
		</>
	);
}
