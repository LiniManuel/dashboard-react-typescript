import styled from "styled-components";
import { DefaultStyledProps, defaultStyledProps } from "../../helper";
interface Props extends DefaultStyledProps {}
const Flex = styled.div<Props>`
  display: flex;
  ${defaultStyledProps};
`;

export default Flex;
