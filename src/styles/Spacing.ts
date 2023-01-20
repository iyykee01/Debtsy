import stylesd from "styled-components";

interface ISpaceNumber {
  spaceTop?: number;
  spaceBottom?: number;
}

export const Spacer = stylesd.View`
 margin-bottom: ${(props: ISpaceNumber) => props.spaceBottom}%;
 margin-top: ${(props: ISpaceNumber) => props.spaceTop}%;
`;
