import { type ReactNode } from 'react';
import { styled } from 'styled-components'

interface DialogProps {
    children?: ReactNode
}

const BodyWrapper = styled.div`
    padding: 1.2rem;
    overflow-y: auto;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 300;

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.scrollTrack};
        border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

const DialogBody = ({ children }: DialogProps) => {
    return (
        <BodyWrapper>
            {children}
        </BodyWrapper>
    )
}

export default DialogBody