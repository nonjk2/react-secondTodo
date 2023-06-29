const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return (state = [action.payload, ...state]);
    case "DELETE_TODO":
      return (state = state.filter((todo) => todo.id !== action.payload));
    case "UPDATE_TODO":
      return (state = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      }));

    default:
      return state;
  }
};

export default todoReducer;
