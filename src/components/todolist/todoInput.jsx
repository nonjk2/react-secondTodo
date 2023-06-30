import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../modules/todo";

const TodoInputContainer = styled.div`
  position: sticky;
  z-index: 1;
  padding: 10px 0px;

  .todoBox {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62.5%;
    border-radius: 10px;
    border: 2.5 solid rgb(241, 233, 192);
    /* background-color: rgb(241, 233, 192); */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;
  }
  .todoBox > form {
    height: 85%;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .namecontainer {
    height: 65px;
    display: flex;
    align-items: center;
    width: 45%;
  }

  .namecontainer > .namespan {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
    width: 10%;
    text-align: center;
  }
  .namecontainer > input {
    border: none;
    background: #eeeeee;
    height: 80%;
    color: #020202;
    font-size: 15px;
    white-space: pre-wrap;
    width: 90%;
    padding: 0px 15px;
  }
  .desccontainer {
    height: 65px;
    display: flex;
    align-items: center;
    width: 45%;
  }

  .desccontainer > .descspan {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
    width: 10%;
    /* text-align: center; */
  }
  .descInput {
    border: none;
    background: #eeeeee;
    height: 80%;
    color: #020202;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    resize: none;
    padding: 0px 15px;
    width: 90%;
  }
  .descInput::-webkit-scrollbar {
    display: none;
  }
  form > button {
    background: rgb(103, 103, 103);
    color: rgb(255, 255, 255);
    border: none;
    font-size: 15px;
    height: 50px;
    margin-right: 8px;
    width: 80px;
  }
`;

const TodoInputComponent = () => {
  const [nameValue, nameChange, nameValueReset] = useInput();
  const [descValue, descChange, descValueReset] = useInput();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (nameValue.length === 0) {
      return alert("제목이 비어있습니다.");
    }
    if (descValue.length === 0) {
      return alert("내용이 비어있습니다");
    }
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
