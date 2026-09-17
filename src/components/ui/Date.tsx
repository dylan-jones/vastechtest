import { styled } from "styled-components";

const StyledDate = styled.input`
    padding: 10px;
    border: ${({ theme }) => theme.border.small};
    border-radius: ${({ theme }) => theme.radius.small};
`;

const Date = () => {
    return (
        <StyledDate
            type="date"
            value="2026-09-17"
            
         />
    );
}

export default Date;