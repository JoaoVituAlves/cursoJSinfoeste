import logoFipp from "../../assets/images/logo-fipp.png";
import logoUnoeste from "../../assets/images/logo-unoeste.png";
import { MobileNavBar } from "./mobile-navbar";
import { Button, Image, List, ListItem, Nav, NavLink, Wrapper } from "./navbar.styles";


export const NavBar = () => {
    const openLink = () => {
        const url = 'https://www.unoeste.br/';
        window.open(url, '_blank');
    };

    return (
        <Wrapper>
            <Nav>
                <Image src = {logoFipp} alt="logo da fipp"/>
                <List>
                    <ListItem>
                        <NavLink to= "/"> Home </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to= "/corpo-docente"> Corpo docente </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to= "/contato"> Contato </NavLink>
                    </ListItem>
                    <ListItem>
                        <Button onClick={openLink}><Image src={ logoUnoeste} alt="logo unoeste"/></Button>
                    </ListItem>
                </List>
                <MobileNavBar/>
            </Nav>
        </Wrapper>
    );
}