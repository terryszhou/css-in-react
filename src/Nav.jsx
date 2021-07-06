import styled, { css, keyframes } from 'styled-components'

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const NavHolder = styled.nav`
    border: 1px solid black;
    color: white;
    text-align: center;
    animation: ${fade} 5s linear infinite;
`

const Header = styled.h1`
    color: lightblue;
    font-size: 35px;
`

export const Nav = () => {
    return (
        <NavHolder>
            <Header>Hello from Nav</Header>
        </NavHolder>
    )
}