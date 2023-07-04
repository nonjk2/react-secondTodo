import styled from "styled-components";
import TodoInputComponent from "../../components/todolist/todoInput";
import TodoworkingComponent from "../../components/todolist/todoworking";
import TodoIsDoneComponent from "../../components/todolist/todoIsDone";

const TodoListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .flexgrow {
    margin-top: 100px;
    flex-grow: 1;
    display: flex;
    /* z-index: -1; */
    /* min-width: 70%; */
  }
  .stickyside {
    width: 100%;
    min-height: 20%;
    position: fixed;
    z-index: 1;
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
