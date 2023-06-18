import React, {useEffect, useState} from 'react';
import {CardGroup, Col, Container, Image, Row} from "react-bootstrap";
import PokedexLogo from "../../assets/images/pokedex.logo.png";
import communicator from "../../api/communicator";

import styles from "./Pokedex.module.scss";
import PokemonCard, {BasePokemon} from "../pokemon/PokemonCard";

const Pokedex = () => {

    const [pokemons, setPokemons] = useState<BasePokemon[]>([]);

    useEffect(() => {
        communicator.getPokemons().then((result: BasePokemon[]) => {
            setPokemons(result)
        })
    }, []);

    console.log('pokemons', pokemons)

    return <Container className={styles.container} >
        <Row className="justify-content-md-center">
            <CardGroup>
                {pokemons.map((pokemon: BasePokemon) => {
                    return <Col key={pokemon.name}><PokemonCard {...pokemon} /></Col>
                })}
            </CardGroup>
        </Row>
    </Container>
}

export default Pokedex;