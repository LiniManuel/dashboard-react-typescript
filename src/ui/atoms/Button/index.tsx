import styled from "styled-components";
import { DefaultStyledProps, defaultStyledProps } from "../../helper";
interface Props extends DefaultStyledProps {}

const Button = styled.button<Props>`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  height: 48px;
  color: ${({ theme }) => theme.colors.white};

  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.2px;
  ${defaultStyledProps};
`;

export default Button;
