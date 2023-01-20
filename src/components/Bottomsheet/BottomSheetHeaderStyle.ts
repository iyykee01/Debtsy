import styled from "styled-components";

export const ButtonsheetHeaderContainerStyle = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ButtonsheetHeaderContentWrapperStyle = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props: { background: string }) => props.background || "green"};
`;
