// action.type: ประเภทความผิด
export const FETCH_TODO = 'FETCH_TODO';

// init state: คะแนนตั้งต้น
export const INIT_TODO = {
	// job: 100,
	todos: [],
	todosFilter: [],
};

// ครูเต้
// action = {type: ทำอระไรผิดมาไอ้หนู, payload: ต้องทำอะไรกับเจ้าหนู}
function todoReducer(state, action) {
	switch (action.type) {
		case FETCH_TODO:
			// do something and return new state
			return { todos: action.payload.todos, todosFilter: action.payload.todos };

		default:
			return state;
	}
}

export default todoReducer;
