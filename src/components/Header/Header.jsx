import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import ThemeButton from "../../Buttons/ThemeButton";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <Navbar />
        <ThemeButton />
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.125rem;
  padding: 8px 24px;
`;

export default Header;
