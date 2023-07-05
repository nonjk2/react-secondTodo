//action value
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const MODIFY_TODO = "MODIFY_TODO";
const CHANGE_TODO = "CHANGE_TODO";

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
export const modifyTodo = ({ id, name, desc }) => {
  return {
    type: "MODIFY_TODO",
    payload: { id: id, todo: { name: name, desc: desc } },
  };
};
export const changeTodo = (id, todoItem) => {
  return {
    type: "CHANGE_TODO",
    payload: { id, todoItem },
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
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case MODIFY_TODO:
      const { id, todo } = action.payload;
      console.log(id, todo);

      return state.map((item) => {
        console.log("item.id: ", item.id, "id: ", id, item.id === id);
        if (item.id === id) {
          console.log("들어옴");
          return { ...item, name: todo.name, desc: todo.desc };
        }
        return item;
      });

    case CHANGE_TODO:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return { ...todoItem, isChange: !todoItem.isChange };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
