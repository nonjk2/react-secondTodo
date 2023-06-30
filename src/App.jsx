import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./pages/todolist";
import GlobalStyle from "./util/globalStyle";
import Header from "./layout/header";
import styled from "styled-components";
import TodoItemDetail from "./components/todolist/todoItemDetail";

const LayoutContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
}

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <div>
        <Outlet />
      </div>
    </LayoutContainer>
  );
}

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />}></Route>
        <Route path="/:id" element={<TodoItemDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
