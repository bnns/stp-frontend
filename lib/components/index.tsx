import styled from "@emotion/styled";

export const Tag = styled.div`
  padding: 5px 10px 10px;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => (props.dark ? "#444" : "#eee")};
  font-family: Futura;
  display: flex;
  align-content: center;
  align-self: flex-start;
  cursor: pointer;
  margin: 5px 8px 0 0;
  p {
    margin: 0;
    color: ${(props) => (props.dark ? "#fff" : "#444")};
  }
`;

export const Link = styled.a`
  display: block;
  margin-bottom: 14px;
`;

type TextProps = {
  center?: boolean;
};

export const Text = styled.p<TextProps>`
  font-size: 14px;
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  width: 100%;
`;

type LightTextProps = {
  isDate?: boolean;
  isTitle?: boolean;
};

export const LightText = styled(Text)<LightTextProps>`
  font-family: Raleway;
  font-weight: 300;
  margin-right: ${(props) => (props.isDate ? 20 : 0)}px;
  text-align: ${(props) => (props.isTitle ? "right" : "inherit")};
  width: ${(props) => (props.isDate ? "150px" : "inherit")};
`;
