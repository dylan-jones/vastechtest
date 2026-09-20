import { type ReactNode } from 'react'

import { styled } from 'styled-components'

import DialogHeader from './DialogHeader'
import DialogBody from './DialogBody'
import DialogFooter from './DialogFooter'

const DialogWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.dialog};
    box-shadow: ${({ theme }) => theme.shadow.main};
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    width: 100%;
    height: 100%;
    min-height: 30rem;

    @media (min-width: 768px) {
        max-width: 60rem;
        min-height: 40rem;
    }
`;

const DialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Dialog = ({ children = '' }: { children: ReactNode }) => {
    return (
        <DialogWrapper>
            <DialogContainer>
                {children}
            </DialogContainer>
        </DialogWrapper>
    )
}

Dialog.Header = DialogHeader
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter

export { DialogHeader, DialogBody, DialogFooter }

export default Dialog