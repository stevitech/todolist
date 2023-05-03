import styled from "styled-components";

export const TLContainer = styled.div`
    > div {
        display: flex;
        align-items: center;

        > p {
            color: #e2dbe2;
            max-width: 20rem;
            line-height: 1.5rem;
            overflow-wrap: break-word;
            &:hover {
                color: #9d5ea3a0;
                cursor: pointer;
            }
        }
        > .edit-list-section {
            display: flex;
            gap: 2rem;
        }
    }
`;
export const StyledListInput = styled.input`
    border-radius: 5px;
    /* border: 0.2px solid #db82e3; */
    border-radius: 80px;
    padding: 0.3rem 1rem;
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
export const StyledListButton = styled.button`
    border-color: transparent;
    border-radius: 15px;
    height: 25px;
    width: 60px;
    background-color: #db82e3;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #9d5ea3;
        color: #ffffff;
    }
`;
