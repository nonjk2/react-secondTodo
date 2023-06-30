import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoWorkItem from "./todoworkingItem";

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
  return (
    <TodoworkingContainer>
      <div className="boxCategorytitle">
        <h1>Working</h1>
      </div>
      <div className="cardContainer" style={{ height: `${containerHeight}px` }}>
        {!!workingList.length &&
          workingList.map((e, i) => (
            <TodoWorkItem key={e.id} item={e} index={i} />
          ))}
      </div>
    </TodoworkingContainer>
  );
};
export default TodoworkingComponent;
