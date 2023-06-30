import styled from "styled-components";
import TodoInputComponent from "../../components/todolist/todoInput";
import TodoworkingComponent from "../../components/todolist/todoworking";
import TodoIsDoneComponent from "../../components/todolist/todoIsDone";

const TodoListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .flexgrow {
    flex-grow: 1;
    min-width: 70%;
    z-index: -1;
  }
  .stickyside {
    width: 100%;
    height: 65px;
    min-height: 30%;
    position: fixed;
  }
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <div className='stickyside'>
        <TodoInputComponent />
      </div>
      <div className='flexgrow'>
        <TodoworkingComponent />
        <TodoIsDoneComponent />
      </div>
    </TodoListContainer>
  );
};
export default TodoList;
