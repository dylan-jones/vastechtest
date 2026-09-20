import { type ReactNode } from 'react';
import { styled } from 'styled-components'

const BodyWrapper = styled.div`
    padding: 1.2rem;
    overflow-y: auto;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 200;

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.scrollTrack};
    }
`;

const DialogBody = ({ children }: { children: ReactNode }) => {
    return (
        <BodyWrapper>
            {children}
        </BodyWrapper>
    )
}

export default DialogBody