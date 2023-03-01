import styled from "styled-components";
import { AppColors } from "../../helpers/colors";

interface ProfileComponentStyleProps {
  isIndex: boolean;
  paddingVertical: string;
}

export const ProfileComponentStyle = styled.Pressable`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px
  border-color: ${(props: ProfileComponentStyleProps) =>
    props.isIndex ? "transparent" : AppColors.lightGray}
  padding-vertical: ${(props: ProfileComponentStyleProps) =>
    props.paddingVertical || "4%"};
`;

interface ContentWrapperStyleProps {
  flex: string;
}
export const ContentWrapperStyle = styled.View`
  display: flex;
  justify-content: center;
  flex: ${(props: ContentWrapperStyleProps) => props.flex || "1"};
`;

export const RightIconWrapperStyle = styled.View`
  align-items: flex-end;
`;
