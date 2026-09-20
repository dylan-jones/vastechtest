import { useState, useId } from "react";
import { styled } from "styled-components";
import { FaCircleInfo } from "react-icons/fa6";

interface StyledInputProps {
    $hasError?: boolean;
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
    position: relative;
    flex: 1;
`;

const InputLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

const StyledInput = styled.input<StyledInputProps>`
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
    z-index: 1;

    border-color: ${({ $hasError, theme }) => $hasError ? theme.colors.secondary : theme.input.border || 'initial'};
`;

const Error = styled.div`
    display: flex;
    align-items: center;
    min-height: ${({ theme }) => theme.input.height};
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-top: 1rem solid ${({ theme }) => theme.colors.secondary};
    z-index: 0;
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: 1.4rem;
    border-radius: 0 0 1.5rem 1.5rem;
    margin-top: -1.5rem;
`;

const Input = ({
        label = '', 
        placeholder = 'Insert text here', 
        initialError = false,
        ...props
    }) => {
    const [value, setValue] = useState('');
    const [error] = useState(initialError)
    const id = useId()

    return (
        <InputContainer>
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
            <StyledInput
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id={id}
                $hasError={Boolean(error)}
                {...props}
                />
            {error && <Error><FaCircleInfo /> Error Message</Error>}
        </InputContainer>
    );
}

export default Input;