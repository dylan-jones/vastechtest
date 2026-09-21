import { useContext } from 'react';
import { styled } from "styled-components";
import { DialogContext } from './DialogContext';

import Button from "../UI/Button";

interface DialogProps {
  cancel: boolean
  delete: boolean
  save: boolean
  onClose?: () => void
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  border-top: ${({ theme }) => theme.border.dialog};
  background-color: ${({ theme }) => theme.colors.panel};
`;

const DialogFooter = ({ cancel, delete: del, save, onClose } : DialogProps) => {
  const ctx = useContext(DialogContext)
  const handleClose = onClose ?? ctx.onClose;

  return (
    <FooterWrapper>
      {cancel && (
        <Button $variant="close" onClick={handleClose}>
          Cancel
        </Button>
      )}
      {del && (
        <Button $variant="delete" onClick={handleClose}>
          Delete
        </Button>
      )}
      {save && (
        <Button $variant="save" onClick={handleClose}>
          Save
        </Button>
      )}
    </FooterWrapper>
  );
};
export default DialogFooter;
