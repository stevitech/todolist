import styled from "styled-components";

export const FormContainer = styled.div``;
export const StyledForm = styled.form`
    border: 0.2px solid #db82e369;
    width: 30rem;
    display: flex;
    justify-content: center;
    border-radius: 80px;
    background-color: #313542;
    gap: 2rem;
    padding: 2rem;
    -webkit-box-shadow: 0px 4px 20px -11px rgba(34, 35, 43, 1);
    -moz-box-shadow: 0px 4px 20px -11px rgba(34, 35, 43, 1);
    box-shadow: 0px 4px 20px -11pxrgba (34, 35, 43, 1);
    &:hover {
        -webkit-box-shadow: 0px 4px 20px 4px rgba(34, 35, 43, 1);
        -moz-box-shadow: 0px 4px 20px 4px rgba(34, 35, 43, 1);
        box-shadow: 0px 4px 20px 4px rgba(34, 35, 43, 1);
    }
`;
export const StyledInput = styled.input`
    border-radius: 5px;
    /* border: 0.2px solid #db82e3; */
    border-radius: 80px;
    padding: 0 1rem;
    background-color: #4f5460;
    outline: none;
    caret-color: auto;
    color: #e2dbe2;
    -webkit-box-shadow: inset 0px 3px 12px -2px rgba(66, 68, 90, 1);
    -moz-box-shadow: inset 0px 3px 12px -2px rgba(66, 68, 90, 1);
    box-shadow: inset 0px 3px 12px -2px rgba(66, 68, 90, 1);
    &::placeholder {
        padding: 0 1rem;
        color: #ebd8eb33;
    }
    &:focus {
        outline: none;
    }
`;
export const StyledButton = styled.button`
    border-color: transparent;
    border-radius: 15px;
    height: 30px;
    width: 80px;
    background-color: #db82e3;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #9d5ea3;
        color: #ffffff;
    }
`;
