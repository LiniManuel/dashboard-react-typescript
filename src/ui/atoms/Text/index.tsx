import styled, { CSSProperties } from "styled-components";
import { DefaultStyledProps, defaultStyledProps } from "../../helper";
import { Theme } from "../../theme";

interface Props extends DefaultStyledProps {
  fontFamily?: CSSProperties["fontFamily"];
  fontStyle?: CSSProperties["fontStyle"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  textAlign?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
  color?: keyof Theme["colors"];
  letterSpacing?: CSSProperties["letterSpacing"];
  whiteSpace?: CSSProperties["whiteSpace"];
  textOverflow?: CSSProperties["textOverflow"];
}

const Text = styled.div<Props>`
  font-family: ${({ fontFamily = "Mulish" }) => (fontFamily ? fontFamily : "")};
  font-style: ${({ fontStyle = "normal" }) => (fontStyle ? fontStyle : "")};
  font-size: ${({ fontSize = "16px" }) => (fontSize ? fontSize : "")};
  font-weight: ${({ fontWeight = "400" }) => (fontWeight ? fontWeight : "")};
  text-align: ${({ textAlign = "center" }) => (textAlign ? textAlign : "")};
  line-height: ${({ lineHeight = "normal" }) => (lineHeight ? lineHeight : "")};
  letter-spacing: ${({ letterSpacing = "normal" }) =>
    letterSpacing ? letterSpacing : ""};
  white-space: ${({ whiteSpace = "normal" }) => (whiteSpace ? whiteSpace : "")};
  text-overflow: ${({ textOverflow = "normal" }) =>
    textOverflow ? textOverflow : ""};
  color: ${({ theme, color = "black" }) =>
    theme.colors[color] ? theme.colors[color] : ""};
  ${defaultStyledProps};
`;

export default Text;
