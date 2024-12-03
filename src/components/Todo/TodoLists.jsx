import { TodoItem } from './TodoItem';

import styles from './TodoLists.module.scss';

// import { useContext } from 'react'; //#1
// import { TodoContext } from '../../contexts/TodoContext'; //#2
import { useTodo } from '../../hooks/useTodo';

export function TodoLists() {
	// const { todosFilter } = useTodo();

	// const sharedObj = useContext(TodoContext); //#3
	// const todosFilter = sharedObj.todosFilter; //#4
	// const { todosFilter } = useContext(TodoContext);
	const { todosFilter } = useTodo();

	return (
		<ul className={styles.todoList}>
			{todosFilter?.map((item) => (
				<TodoItem todo={item} key={item.id} />
			))}
		</ul>
	);
}
