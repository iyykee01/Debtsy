import styled from "styled-components/native";
import { AppColors } from "../../../../helpers/colors";

export const TextInputTxnDetailsStyle = styled.TextInput`
    border-color: ${AppColors.colorGreen};
    borderWidth: ${(props) => (props.isEdit ? "1px" : "0px")};
    padding: 5px;
    fontSize: 28px
    borderRadius: 8px
    width: 30%;
    align-self: center;
    text-align: center
    color: ${AppColors.textColor}

`;
