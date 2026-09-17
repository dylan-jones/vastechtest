import { styled } from 'styled-components'

import DialogHeader from './DialogHeader'

const DialogWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.dialog};
    box-shadow: ${({ theme }) => theme.shadow.main};
    width: 60rem;
    height: 40rem;
`;

const Dialog = ({ children }) => {
    return (
        <DialogWrapper>
            {children}
        </DialogWrapper>
    )
}

Dialog.Header = DialogHeader

export default Dialog