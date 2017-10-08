import styled, { css } from "styled-components";

const defaultColors = css`
  background-color: #fc738e;
  color: #1e1099;
`;

const invertedColors = css`
  background-color: #1e1099;
  color: #fc738e;
  background-color: #f7ddaf;
  color: #e45737;
`;

export default styled.button`
  width: 80%;

  ${props => (props.inverted ? invertedColors : defaultColors)}
  padding: 2rem;

  font-weight: 800;
  font-size: 2rem;

  border: none;

  cursor: pointer;

  &:hover {
    ${props => (props.inverted ?  defaultColors : invertedColors)};
  }
`;
