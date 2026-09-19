import { ReactNode } from "react";

import styled, { css } from "styled-components";

type ButtonVariants = "save" | "delete" | "close";

interface ButtonProps {
    $variant?: ButtonVariants;
    children?: ReactNode;
}

const variantStyles = {
    save: css`
        background-color: ${({ theme }) => theme.colors.primary}; 
        color: white;

        &:hover {
            background-color: ${({ theme }) => theme.colors.primaryHover};
        }
    `,
    delete: css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondaryHover};
        }
    `,
    close: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.text};
        text-decoration: underline;

        &:hover {
            color: ${({ theme }) => theme.colors.textHover};
        }
    `
};

const StyledButton = styled.button<ButtonProps>`
    border: none;
    border-radius: ${({ theme }) => theme.button.borderRadius};
    transition: background-color 0.3s ease;
    font-size: 1.3rem;
    font-weight: 600;
    width: 100%;
    padding: ${({ theme }) => theme.button.padding};
    height: ${({ theme }) => theme.button.height};
    max-width: ${({ theme }) => theme.button.minWidth};
    cursor: pointer;

    ${({ $variant  = 'save' }) => variantStyles[$variant]}

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const Button = ({ $variant = "save", onClick, children, ...props }: ButtonProps) => {
    return (
        <StyledButton $variant={$variant} onClick={onClick} {...props}>
            {children}
        </StyledButton>
    )
};

export default Button;