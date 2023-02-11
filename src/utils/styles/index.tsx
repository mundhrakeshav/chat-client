import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
    background: inherit;
    outline: none;
    border: none;
    color: white;
    font-family: "Inter";
    font-size: 18px;
    box-sizing: border-box;
    width: 100%;
    padding: 0;
`;

export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button`
    width: 100%;
    color: #fff;
    background-color: #2b09ff;
    outline: none;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    padding: 25px;
    transition: 300ms background-color ease;
    type: submit;
    &:hover {
        cursor: pointer;
        background-color: #5e45ff;
    }
    `;


export const Page = styled.div<PageProps>`
    height: 100%;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContents};
    align-items: ${(props) => props.alignItems};
    background-color: #1a1a1a;
    `;

export const ConversationSidebarStyle = styled.aside`
    height: 100%;
    background-color: #1a1a1a;
    width: ${SIDEBAR_WIDTH}px;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid #54545445;
    header {
        border-bottom: 1px solid #54545445;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18px;
        background-color: #141414;
        height: 100px;
    }
`;


export const ConversationChannelPageStyle = styled.div`
    height: 100%;
    margin-left: ${SIDEBAR_WIDTH}px;
`;

