import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 80px;
  border: 1px solid #eee;
  align-items: center;
  background-color: #eee;
  box-shadow: 0 8px 15px rgb(0 0 0 / 10%);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>TodoList</div>
      <div>with react & redux</div>
    </HeaderContainer>
  );
};
export default Header;
