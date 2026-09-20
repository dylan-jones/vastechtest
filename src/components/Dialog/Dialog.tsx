import { useCallback, useEffect, useMemo, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react'

import { styled } from 'styled-components'
import { DialogContext } from './DialogContext';

import DialogHeader from './DialogHeader'
import DialogBody from './DialogBody'
import DialogFooter from './DialogFooter'

interface DialogProps {
    open?: boolean
    onClose?: () => void
    onExpand?: (isExpanded: boolean) => void
    height?: string
    maxWidth?: string
    children?: ReactNode
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 1000;
    padding: ${({ theme }) => theme.spacing.lg};
    background-color: rgba(0, 0, 0, 0.4);
`;

const DialogWrapper = styled.div<{ $expanded?: boolean }>`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.dialog};
    box-shadow: ${({ theme }) => theme.shadow.main};
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    width: 100%;
    height: ${({$expanded}) => ($expanded ? '100%' : 'auto')};
    max-width: ${({$expanded}) => ($expanded ? '100%' : 'initial')};
`;

const DialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Dialog = ({ 
    open = false,
    onClose,
    onExpand,
    height = '420px',
    maxWidth,
    children = '',
}: DialogProps ) => {
    
    const [isOpen, setIsOpen] = useState(open);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const handleClose = useCallback(() => {
        setIsOpen(false)
        onClose?.()
    }, [onClose])

    const handleExpand = useCallback(() => {
        setExpanded((current) => {
            const nextValue = !current
            onExpand?.(nextValue)
            return nextValue
        })
    }, [onExpand])

    const handleWrapperClick = (e: ReactMouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const contextValue = useMemo(
        () => ({
            onClose: handleClose,
            expanded,
            onExpand: handleExpand
        }),
        [expanded, handleClose, handleExpand]
    )

    if (!isOpen) return null;

    return (
        <DialogContext.Provider value={contextValue}>
            <Overlay onClick={handleClose}>
                <DialogWrapper 
                    $expanded={expanded}
                    onClick={handleWrapperClick}
                    style={{
                        height: expanded ? '100%' : (height ?? 'auto'),
                        maxWidth: expanded ? '100%' : (maxWidth ?? '100%'),
                    }}>
                    <DialogContainer>
                        {children}
                    </DialogContainer>
                </DialogWrapper>
            </Overlay>
        </DialogContext.Provider>
    )
}

Dialog.Header = DialogHeader
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter

export { DialogHeader, DialogBody, DialogFooter }

export default Dialog