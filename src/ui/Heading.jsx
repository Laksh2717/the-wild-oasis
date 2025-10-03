import styled, { css } from "styled-components";

const showYellow = true;

// const test = `text-align : center`  // without css function.
const test = css`
  text-align: center;
  ${showYellow && "background-color : yellow"}
`;

// const Heading = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   ${test}
// `;

// const Heading = styled.h1`
//   ${test}
//   ${props => props.type === 'h1' && css`
//     font-size: 3rem;
//     font-weight: 600;
//   `}
//   ${props => props.type === 'h2' && css`
//     font-size: 2rem;
//     font-weight: 600;
//   `}
//   ${props => props.type === 'h3' && css`
//     font-size: 1rem;
//     font-weight: 500;
//   `}
// `
const Heading = styled.h1`
  ${test}
  ${props => props.as === 'h1' && css`
    font-size: 3rem;
    font-weight: 600;
  `}
  ${props => props.as === 'h2' && css`
    font-size: 2rem;
    font-weight: 600;
  `}
  ${props => props.as === 'h3' && css`
    font-size: 1rem;
    font-weight: 500;
  `}
`
export default Heading;
