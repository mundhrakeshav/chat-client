import styled from "styled-components";

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
`;


export const Page = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
`;