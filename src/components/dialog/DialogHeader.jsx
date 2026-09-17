import { styled } from 'styled-components'

import { FaRegCircleXmark, FaBolt, FaWindowMaximize  } from "react-icons/fa6";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const HeaderTitle = styled.h3`
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DialogHeader = ({ title }) => {
    return (
        <HeaderWrapper>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaBolt size={20} />
                <HeaderTitle>{title}</HeaderTitle>
            </div>
            <HeaderActions>
                <ActionButton aria-label="Maximize dialog">
                    <FaWindowMaximize size={20} />
                </ActionButton>
                <ActionButton aria-label="Close dialog">
                    <FaRegCircleXmark size={20} />
                </ActionButton>
            </HeaderActions>
        </HeaderWrapper>
    )
}

export default DialogHeader