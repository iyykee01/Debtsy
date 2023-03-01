import styled from "styled-components";

export const ButtomsheetHeaderContainerStyle = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

interface ContentWrapperStyleProps {
  flex: string;
}
export const ButtomsheetContentWrapperStyle = styled.Pressable`
  display: flex;
  justify-content: center;
  flex: ${(props: ContentWrapperStyleProps) => props.flex || "1"};
`;

export const ButtonsheetCloseButtonContainerStyle = styled(
  ButtomsheetContentWrapperStyle
)`
  align-items: flex-end;
`;

export const ButtomsheetlastContentWrapper = styled.View`
  align-items: flex-end;
  width: 50px;
  hieght: 100%;
  border-radius: 25px;
  background-color: #000;
`;
