import { styled } from "styled-components";

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Input = () => {
    return (
        <StyledInput
            type="text"
            placeholder="Enter text"
            />
    );
}

export default Input;