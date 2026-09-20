import { useState } from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: ${({ theme }) => theme.input.height};
    border: ${({ theme }) => theme.input.border};
    border-radius: ${({ theme }) => theme.input.borderRadius};
    padding: ${({ theme }) => theme.input.padding};
    font-size: 1.4rem;
    font-weight: 200;
`;

const Input = ({placeholder = 'Insert text here'}) => {
    const [value, setValue] = useState('');
    return (
        <StyledInput
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
    );
}

export default Input;