import styled from "styled-components";

export const ProfileComponentStyle = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px solid black;
  padding: 4%;
`;

interface ContentWrapperStyleProps {
  flex: string;
}
export const ContentWrapperStyle = styled.View`
  display: flex;
  justify-content: center;
  background-color: blue;
  flex: ${(props: ContentWrapperStyleProps) => props.flex || "1"};
`;
