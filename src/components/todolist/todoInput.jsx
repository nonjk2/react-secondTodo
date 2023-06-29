import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../modules/todo";

const TodoInputContainer = styled.div`
  position: sticky;
  top: 150px;
  z-index: 1;
  padding: 15px 10px;

  .todoBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TodoInputComponent = () => {
  const [nameValue, nameChange, nameValueReset] = useInput();
  const [descValue, descChange, descValueReset] = useInput();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        name: nameValue,
        desc: descValue,
        isDone: false,
        id: uuidv4(),
      })
    );
    nameValueReset();
    descValueReset();
  };
  return (
    <TodoInputContainer>
      <div className='todoBox'>
        <form onSubmit={onSubmitHandler}>
          <div className='namecontainer'>
            <span className='namespan'>제목</span>
            <input
              type='text'
              value={nameValue}
              onChange={nameChange}
              className='nameInput'
            />
          </div>
          <div className='desccontainer'>
            <span className='descspan'>설명</span>
            <input
              type='text'
              value={descValue}
              onChange={descChange}
              className='descInput'
            />
          </div>
          <button onClick={onSubmitHandler}>추가하기</button>
        </form>
      </div>
    </TodoInputContainer>
  );
};
export default TodoInputComponent;
