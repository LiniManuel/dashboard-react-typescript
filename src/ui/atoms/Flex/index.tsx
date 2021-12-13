import styled from "styled-components";
import { DefaultStyledProps, defaultStyledProps } from "../../helper";
import { Theme } from "../../index";
interface Props extends DefaultStyledProps {
  backgroundColor?: keyof Theme["colors"];
}
const Flex = styled.div<Props>`
  display: flex;
  background-color: ${({ theme, backgroundColor }) =>
    theme && backgroundColor ? theme.colors[backgroundColor] : ""};
  ${defaultStyledProps};
`;

export default Flex;
