import { createContext } from "react";

interface DialogContextValue {
    onClose?: () => void
    onExpand?: () => void
    expanded?: boolean
}

export const DialogContext = createContext<DialogContextValue>({
    onClose: undefined,
    onExpand: undefined,
    expanded: false,
})