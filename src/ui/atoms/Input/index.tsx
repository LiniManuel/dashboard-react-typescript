import styled, { CSSProperties } from "styled-components";

interface Props {
  width?: CSSProperties["width"];
}
const Input = styled.input<Props>`
  width: ${({ width = "80%" }) => width};
  height: 42px;
  border: ${({ theme }) => `${theme.colors.border}`};
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default Input;
