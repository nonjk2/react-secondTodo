import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TodoWorkItem from "./todoworkingItem";
import { useEffect } from "react";

const TodoworkingContainer = styled.div`
  width: 100%;
  margin: 30px 0 0 0;

  .cardContainer {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    /* min-width: 800px; */
  }
`;

const TodoworkingComponent = () => {
  const todoList = useSelector((state) => state.todo);
  const workingList = todoList.filter((todo) => !todo.isDone);
  const containerHeight = Math.ceil(workingList.length / 4) * 250 || 250;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  const onChangeHandler = (e, id) => {
    const { value } = e.target;
    const updatedTodo = {
      ...todoList.find((todo) => todo.id === id),
      name: value,
    };
    dispatch(changeTodo(id, updatedTodo));
  };

  return (
    <TodoworkingContainer>
      <div className='boxCategorytitle'>
        <h1>Working</h1>
      </div>
      <div className='cardContainer' style={{ height: `${containerHeight}px` }}>
        {!!workingList.length &&
          workingList.map((e, i) => (
            <TodoWorkItem
              key={e.id}
              item={e}
              index={i}
              value={e.name}
              onChangeHandler={onChangeHandler}
            />
          ))}
      </div>
    </TodoworkingContainer>
  );
};
export default TodoworkingComponent;
