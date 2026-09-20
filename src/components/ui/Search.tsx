import { styled } from 'styled-components'
import { FaMagnifyingGlass } from "react-icons/fa6";

import Input from "./Input"

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
`;

const SearchInput = styled(Input) `
    padding-right: ${({ theme }) => theme.spacing.xl};
`;

const IconContainer = styled.div`
    position: absolute;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    font-size: 1.2rem;
    z-index: 1;
`;

const Search = ({ placeholder = 'Search...'}) => {
    return (
        <SearchContainer>
            <SearchInput 
                placeholder={placeholder}
            />
            <IconContainer>
                <FaMagnifyingGlass />
            </IconContainer>
        </SearchContainer>
    )
}

export default Search;