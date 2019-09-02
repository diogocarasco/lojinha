import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`

`

const Menu = styled.div`
`

const MenuItem = styled(NavLink)`

`

const Header = () => (
    <Container>
        <Menu>
            <MenuItem to='/' > Home </MenuItem>
            <MenuItem to='/produtos' > Produtos </MenuItem>
            <MenuItem to='/dashboard' > Dashboard </MenuItem>
            <MenuItem to='/login' > Login </MenuItem>
        </Menu>
    </Container>
)

export default Header