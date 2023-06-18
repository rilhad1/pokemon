import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import PokedexLogo from './../../assets/images/pokedex.logo.png';

import styles from './Header.module.scss';

const Header = () => {
    return <Container className={styles.container}>
        <Row>
            <Col xs={6} md={4}>
                <Image className={styles.logo} src={PokedexLogo} rounded />
            </Col>
        </Row>
    </Container>
}

export default Header;