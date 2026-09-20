import { useState } from "react";

import { styled } from "styled-components";

const StyledDate = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: ${({ theme }) => theme.input.height};
    border: ${({ theme }) => theme.input.border};
    border-radius: ${({ theme }) => theme.input.borderRadius};
    padding: ${({ theme }) => theme.input.padding};
    outline: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 1.4rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
`;

const Date = () => {
    const [date, setDate] = useState('');

    return (
        <StyledDate
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
         />
    );
}

export default Date;