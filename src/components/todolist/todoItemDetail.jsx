import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { modifyTodo } from "../../modules/todo";

const Itemdiv = styled.div`
  @font-face {
    font-family: "KOTRAHOPE";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 3px solid #d9d673;
  border-radius: 20px;
  padding: 10px;
  height: 315px;
  h1 {
    width: 100px;
    background-color: rgb(185 177 147);
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: 2px solid rgb(185 177 147);
    text-align: center;
    padding: 5px;
    font-size: 19px;
    border-radius: 20px;
    height: 40px;
  }
  input {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 20px;
    height: 60px;
    font-family: "KOTRAHOPE";
    font-weight: normal;
    margin-bottom: 22px;
    background: rgb(229 224 199);
    border: none;
  }
  .titleInput {
    font-size: 40px;
  }
  .contentInput {
    font-size: 28px;
  }
  .detailtitle {
    margin-top: 20px;
    font-size: 65px;
    font-weight: 400;
    height: 85px;
    font-family: "KOTRAHOPE";
  }
  .detaildesc {
    font-size: 33px;
    height: 60px;
    margin-bottom: 20px;
  }
  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .buttons > .change,
  .buttons > .save {
    background-color: rgb(186, 180, 155);
    color: #ffffff;
    border: none;
    border-radius: 20px;
    height: 40px;
    width: 95px;
    font-size: 17px;
    font-weight: 600;
    margin-right: 10px;
  }
  .buttons > .main {
    background-color: #ffffff;
    color: rgb(186, 180, 155);
    border: rgb(186, 180, 155) 2px solid;
    border-radius: 20px;
    height: 40px;
    width: 95px;
    font-size: 17px;
    font-weight: 600;
  }
`;
const TodoItemDetail = () => {
  const todoList = useSelector((state) => state.todo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [todoItem] = todoList.filter((card) => card.id === id);
  const [edited, setEdited] = useState(false);
  const navigate = useNavigate();
  const [title, setNewTitle] = useState(todoItem.name);
  const [desc, setNewDesc] = useState(todoItem.desc);

  useEffect(() => {
    if (!todoList.length) {
      navigate("/");
    }
  }, [navigate, todoList]);
  const onChangeEditInput = (e) => {
    if (e.target.name === "title") {
      setNewTitle(e.target.value);
    } else if (e.target.name === "desc") {
      setNewDesc(e.target.value);
    }
  };
  const onModifyHandler = (child) => {
    setEdited(true);
  };
  const onSaveHandler = () => {
    setEdited(false);
    dispatch(
      modifyTodo({
        id: id,
        name: title,
        desc: desc,
      })
    );
  };
  const onMain = () => {
    navigate(-1);
  };
  return (
    <>
      {!todoItem ? (
        <></>
      ) : (
        <Itemdiv>
          {todoItem.isDone ? <h1>Done</h1> : <h1>Working</h1>}
          {edited ? (
            <input
              className='titleInput'
              name='title'
              value={title}
              onChange={onChangeEditInput}
            />
          ) : (
            <div className='detailtitle'>{title}</div>
          )}
          {edited ? (
            <input
              className='contentInput'
              name='desc'
              value={desc}
              onChange={onChangeEditInput}
            />
          ) : (
            <div className='detaildesc'>{desc}</div>
          )}
          <div className='buttons'>
            {edited ? (
              <button className='save' onClick={onSaveHandler}>
                저장하기
              </button>
            ) : (
              <button className='change' onClick={onModifyHandler}>
                수정하기
              </button>
            )}
            <button className='main' onClick={onMain}>
              메인으로
            </button>
          </div>
        </Itemdiv>
      )}
    </>
  );
};

export default TodoItemDetail;
