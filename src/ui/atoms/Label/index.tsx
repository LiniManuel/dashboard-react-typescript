import styled from "styled-components";
import { DefaultStyledProps, defaultStyledProps } from "../../helper";
interface Props extends DefaultStyledProps {}
const Label = styled.label<Props>`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.label};
  ${defaultStyledProps}
`;

export default Label;
