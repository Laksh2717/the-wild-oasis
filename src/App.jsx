import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding : 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  
  // global styles :
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;

const StyledApp = styled.div`
  padding: 20px;
  background-color: orange;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The wild oasis</H1>
        <Button onClick={() => alert("check in")}>check in</Button>
        <Input type="number" placeholder="No of guests" />
      </StyledApp>
    </>
  );
}

export default App;
