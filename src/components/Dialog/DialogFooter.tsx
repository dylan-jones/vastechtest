import { styled } from "styled-components";

import Button from "../UI/Button";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  border-top: ${({ theme }) => theme.border.dialog};
  background-color: ${({ theme }) => theme.colors.panel};
`;

const DialogFooter = ({ cancel, delete: del, save } : {cancel : any, delete: any, save: any}) => {
  return (
    <FooterWrapper>
      {cancel && (
        <Button $variant="close" onClick={cancel}>
          Cancel
        </Button>
      )}
      {del && (
        <Button $variant="delete" onClick={del}>
          Delete
        </Button>
      )}
      {save && (
        <Button $variant="save" onClick={save}>
          Save
        </Button>
      )}
    </FooterWrapper>
  );
};
export default DialogFooter;
