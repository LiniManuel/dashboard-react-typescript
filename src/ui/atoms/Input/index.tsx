import styled from "styled-components";
import { DefaultStyledProps, defaultStyledProps } from "../../helper";
interface Props extends DefaultStyledProps {}

const Input = styled.input<Props>`
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
  ${defaultStyledProps};
`;

export default Input;
