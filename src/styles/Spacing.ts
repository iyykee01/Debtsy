import styled from "styled-components";

interface ISpaceNumber {
  spaceTop?: number;
  spaceBottom?: number;
}

export const Spacer = styled.View`
  margin-bottom: ${(props: ISpaceNumber) => props.spaceBottom || 0};
  margin-top: ${(props: ISpaceNumber) => props.spaceTop || 0};
`;
