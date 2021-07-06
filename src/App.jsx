import './App.css';
import logo from './logo.svg'
import { Nav } from './Nav'
import { useState } from 'react'
// import { Card } from 'react-bootstrap'

// import { Card, Image, Heading } from 'rebass'

import { Button, Menu, MenuItem, Fade } from '@material-ui/core'

export const App = () => {
    const [menuOpen, setMenuOpen] = useState(null)

    const handleClick = (e) => {
        setMenuOpen(e.currentTarget)
    }

    return (
        <div className="App">
            <Nav />
            <header className="App-header">

                {/* <Card style={{width: "120px"}}>
                    <Card.Img src={logo}/>
                    <Card.Title>Learn React!</Card.Title>
                    <Card.Subtitle>This is my React App</Card.Subtitle>
                </Card> */}

                {/* <Card width={120}>
                    <Image src={logo}/>
                    <Heading>Learn React!</Heading>
                </Card> */}

                <Button 
                    style={{color: "white"}} 
                    aria-controls="fade-menu" 
                    aria-haspopup="true"
                    onClick={handleClick}>
                        Open Menu
                </Button>
                <Menu 
                    keepMounted 
                    open={menuOpen} 
                    TransitionComponent={Fade}
                    ancorEl={menuOpen}>
                        <MenuItem>
                            <a 
                                href="https://www.google.com" 
                                target="_blank" 
                                rel="noreferrer">
                                    Option 1
                            </a>
                        </MenuItem>
                        <MenuItem>Option 2</MenuItem>
                        <MenuItem>Option 3</MenuItem>
                </Menu>
            </header>
        </div>
    )
}
