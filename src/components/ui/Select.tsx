import { useId } from 'react'
import styled from 'styled-components'

import { FaChevronDown } from 'react-icons/fa6'

interface SelectProps {
    name: string;
    label?: string;
    arrayVal?: string[];
}

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

const SelectLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
`;

const StyledSelect = styled.select`
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

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary}
    }
`;

const IconContainer = styled.div`
    position: absolute;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    font-size: 1.2rem;
`;

const Select = ({ name, label, arrayVal = [] }: SelectProps) => {
    const id = useId()

    return (
        <SelectContainer>
            {label && <SelectLabel htmlFor={id}>{label}</SelectLabel>}
            <SelectWrapper>
                <StyledSelect id={id} name={name}>
                    {arrayVal.map((item, index) =>
                        <option key={index} value={item.toLowerCase()}>{item}</option>
                    )}
                    </StyledSelect>
                    <IconContainer>
                        <FaChevronDown />
                    </IconContainer>
            </SelectWrapper>
        </SelectContainer>
    )
}

export default Select