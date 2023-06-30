import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoWorkItem from "./todoworkingItem";

const TodoIsDoneContainer = styled.div`
  width: 100%;
  margin: 30px 0 0 0;
  .CardContainer {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    /* min-width: 800px; */
  }
`;

const TodoIsDoneComponent = () => {
  const todoList = useSelector((state) => state.todo);
  const DoneList = todoList.filter((todo) => todo.isDone);

  // const DoneLists = useMemo(()=> ([...DoneLists , todoList.filter()]))
  return (
    <TodoIsDoneContainer>
      <div className="boxCategorytitle">
        <h1>Done</h1>
      </div>
      <div className="CardContainer">
        {!!DoneList.length &&
          DoneList.map((e, i) => (
            <TodoWorkItem key={e.id} item={e} index={i} />
          ))}
      </div>
    </TodoIsDoneContainer>
  );
};
export default TodoIsDoneComponent;
