import { useContext } from 'react'; //#1

import { TodoContext } from '../../contexts/TodoContext'; //#2

import styles from './TodoLists.module.scss';

// import { useTodo } from '../../hooks/useTodo';
import { TodoItem } from './TodoItem';

export function TodoLists() {
	// const { todosFilter } = useTodo();

	// const sharedObj = useContext(TodoContext); //#3
	// const todosFilter = sharedObj.todosFilter; //#4
	const { todosFilter } = useContext(TodoContext);

	return (
		<ul className={styles.todoList}>
			{todosFilter?.map((item) => (
				<TodoItem todo={item} key={item.id} />
			))}
		</ul>
	);
}
