import { styled } from "styled-components";

const StyledButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
`;

const Button = () => {
    return (
        <StyledButton>
            Button
        </StyledButton>
    )
};

export default Button;