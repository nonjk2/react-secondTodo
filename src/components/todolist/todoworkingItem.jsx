/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { delTodo, updateTodo } from "../../modules/todo";

const TodoWorkItemContainer = styled.div`
  width: 100%;
  padding: 5px;
  transition: transform 0.3s ease;
  position: absolute;
  @font-face {
    font-family: "KOTRAHOPE";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  .ItemWrapper {
    background-color: #fff;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 8px 15px rgb(0 0 0 / 10%);
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .cardName {
      display: flex;
      word-break: break-all;
      align-items: center;
      justify-content: center;
      padding: 6px 0;
    }
    .cardName > span {
      font-size: 30px;
      font-family: "KOTRAHOPE";
      text-align: center;
    }
    .cardName > span:hover {
      cursor: pointer;
    }
    .btns {
      width: 100%;
      display: flex;

      .buttonContainer {
        display: flex;
        justify-content: center;
        padding: 5px 10px 15px 15px;
        width: 50%;
        button {
          border: none;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          cursor: pointer;
        }
        .enterCard {
          background-color: #dbdb9f;
        }
        .delCard {
          background-color: #dedede;
        }
      }
    }
  }
`;

const TodoWorkItem = (props) => {
  const { item, index } = props;
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [itemName, setItemName] = useState(item.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
    }
  }, []);

  const y = Math.floor(index) * dimensions.height;

  const onDelHandler = () => {
    dispatch(delTodo(item.id));
  };
  const onIsDoneHandler = () => {
    dispatch(updateTodo(item));
  };
  const onRouteDetail = () => {
    navigate(`${item.id}`);
  };

  return (
    <TodoWorkItemContainer
      ref={cardRef}
      style={{ transform: `translate3d(0, ${y}px, 0)` }}>
      <div className='ItemWrapper'>
        <div className='cardName'>
          <span onClick={onRouteDetail}>{item.name}</span>
        </div>
        <div className='btns'>
          <div className='buttonContainer'>
            <button onClick={onDelHandler} className='delCard'>
              삭제
            </button>
          </div>
          <div className='buttonContainer'>
            <button onClick={onIsDoneHandler} className='enterCard'>
              {item.isDone ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </div>
    </TodoWorkItemContainer>
  );
};
export default TodoWorkItem;
