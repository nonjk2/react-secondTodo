//action value
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (post) => {
  return {
    type: "ADD_TODO",
    payload: post,
  };
};

export const updateTodo = (post) => {
  return {
    type: "UPDATE_TODO",
    payload: post,
  };
};
export const delTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = [action.payload, ...state]); //밀려나는 애니메이션을 위해서 action.payload 앞에도 존재
    case DELETE_TODO:
      return (state = state.filter((todo) => todo.id !== action.payload));
    case UPDATE_TODO:
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
