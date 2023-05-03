import styled from "styled-components";

export const TodoAppContainer = styled.div`
    display: flex;
    background-color: #313542;
    flex-direction: column;
    align-items: center;
    margin: 5rem auto;
    min-height: 45rem;
    max-height: 48rem;
    padding: 2.5rem;

    border-radius: 80px;
    -webkit-box-shadow: 0px 4px 20px -2px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 4px 20px -2px rgba(66, 68, 90, 1);
    box-shadow: 0px 4px 20px -2px rgba(66, 68, 90, 1);
    width: 39rem;
    .header {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        text-align: center;
        > h1 {
            color: #db82e3ff;
            font-weight: bold;
        }
        > p {
            margin-bottom: 25px;
            color: #e2dbe2;
        }
    }
    .list {
        display: flex;
        justify-content: space-between;
        padding: 1.6rem;
        border-bottom: 1px solid #db82e348;
        &:hover {
            border-bottom: 1px solid #db82e397;
            -webkit-box-shadow: 1px 0px 31px -14px rgba(66, 68, 90, 1);
            -moz-box-shadow: 1px 0px 31px -14px rgba(66, 68, 90, 1);
            box-shadow: 1px 0px 31px -14px rgba(66, 68, 90, 1);
        }
    }
    .map-container {
        max-height: 30rem;
        scroll-behavior: smooth;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 10px;
            border: 1px solid #db82e300;
        }
    }

    .icons {
        > svg {
            color: #e2dbe268;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                color: #f76f6f;
            }
        }
        .edit-btn {
            &:hover {
                color: #e9f76f;
            }
        }
    }
`;
export const TodoAppWrapper = styled.div``;
