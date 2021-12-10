import styled, { CSSProperties } from "styled-components";

interface Props {
  fontFamily?: CSSProperties["fontFamily"];
  fontStyle?: CSSProperties["fontStyle"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  textAlign?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
  letterSpacing?: CSSProperties["letterSpacing"];
}
const Text = styled.text<Props>`
  font-family: ${({ fontFamily = "Mulish" }) => (fontFamily ? fontFamily : "")};
  font-style: ${({ fontStyle = "normal" }) => (fontStyle ? fontStyle : "")};
  font-size: ${({ fontSize = "16px" }) => (fontSize ? fontSize : "")};
  font-weight: ${({ fontWeight = "400" }) => (fontWeight ? fontWeight : "")};
  text-align: ${({ textAlign = "left" }) => (textAlign ? textAlign : "")};
  line-height: ${({ lineHeight = "normal" }) => (lineHeight ? lineHeight : "")};
  letter-spacing: ${({ letterSpacing = "normal" }) =>
    letterSpacing ? letterSpacing : ""};
  color: ${({ theme }) => theme.colors.secondary};
`;

export default Text;
