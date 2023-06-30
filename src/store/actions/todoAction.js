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
