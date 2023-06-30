import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../modules/todo";

const TodoInputContainer = styled.div`
  position: sticky;
  top: 300px;
  z-index: 1;
  padding: 10px 35px;

  .todoBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 400px;
    border-radius: 10px;
    border: 1.3px solid rgb(241, 233, 192);
    background-color: rgb(241, 233, 192);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;
  }
  .todoBox > form {
    height: 85%;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 200px;
  }
  .namecontainer {
    height: 65px;
    display: flex;
    flex-direction: column;
  }

  .namecontainer > .namespan {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
  }
  .namecontainer > input {
    border: none;
    background: #eeeeee;
    height: 100%;
    color: #020202;
    font-size: 15px;
    white-space: pre-wrap;
    width: 170px;
    padding: 0px 15px;
  }
  .desccontainer {
    border-bottom: 1px solid #ddd;
    height: 200px;
    margin-top: 10px;
  }
  .desccontainer > .descspan {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
  }
  .descText {
    border: none;
    background: #eeeeee;
    height: 100%;
    color: #020202;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    resize: none;
    padding: 0px 15px;
    width: 170px;
  }
  .descText::-webkit-scrollbar {
    display: none;
  }
  form > button {
    margin-top: 25px;
    margin-bottom: 10px;
    background: #676767;
    color: #ffffff;
    border: none;
    font-size: 15px;
    height: 30px;
    width: 80px;
  }
`;

const TodoInputComponent = () => {
  const [nameValue, nameChange, nameValueReset] = useInput();
  const [descValue, descChange, descValueReset] = useInput();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!nameValue.length && !descValue.length) {
      return alert("잘못된 접근입니다.");
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
      <div className="todoBox">
        <form onSubmit={onSubmitHandler}>
          <div className="namecontainer">
            <span className="namespan">제목</span>
            <input
              type="text"
              value={nameValue}
              onChange={nameChange}
              className="nameInput"
            />
          </div>
          <div className="desccontainer">
            <span className="descspan">설명</span>
            <textarea
              value={descValue}
              onChange={descChange}
              className="descText"
            />
          </div>
          <button onClick={onSubmitHandler}>추가하기</button>
        </form>
      </div>
    </TodoInputContainer>
  );
};
export default TodoInputComponent;
