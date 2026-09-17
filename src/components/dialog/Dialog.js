import { styled } from 'styled-components'

const DialogContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.dialog};
    box-shadow: ${({ theme }) => theme.shadow.main};
    padding: 2rem;
`;

const Dialog = () => {
    return (
        <div>
            <h1>Dialog</h1>
        </div>
    )
}

export default Dialog