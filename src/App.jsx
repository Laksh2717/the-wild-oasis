import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input"
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  padding: 20px;
  background-color: orange;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {/* <Heading type="h1">The wild oasis</Heading>
        <Heading type="h2">The wild oasis</Heading>
        <Heading type="h3">The wild oasis</Heading> */}
        <Heading as="h1">The wild oasis</Heading>
        <Heading as="h2">The wild oasis</Heading>
        <Heading as="h3">The wild oasis</Heading>
        <Button onClick={() => alert("check in")}>check in</Button>
        <Input type="number" placeholder="No of guests" />
      </StyledApp>
    </>
  );
}

export default App;
