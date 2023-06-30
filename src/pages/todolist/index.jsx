import styled from "styled-components";
import TodoInputComponent from "../../components/todolist/todoInput";
import TodoworkingComponent from "../../components/todolist/todoworking";
import TodoIsDoneComponent from "../../components/todolist/todoIsDone";

const TodoListContainer = styled.div`
  position: relative;
  display: flex;
  .flexgrow {
    flex-grow: 1;
    display: flex;
    /* min-width: 70%; */
  }
  .stickyside {
    width: 30%;
    /* background-color: #d7babab1; */
    height: auto;
    min-width: 30%;
  }
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <div className="flexgrow">
        <TodoworkingComponent />
        <TodoIsDoneComponent />
      </div>
      <div className="stickyside">
        <TodoInputComponent />
      </div>
    </TodoListContainer>
  );
};
export default TodoList;
