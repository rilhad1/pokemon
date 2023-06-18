import React, {FC, useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";


import styles from "PokemonCard.module.scss";
import communicator from "../../api/communicator";
const img = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22220%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20220%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_188cea92155%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_188cea92155%22%3E%3Crect%20width%3D%22220%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2281.86328125%22%20y%3D%2284.95%22%3E220x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";


export interface BasePokemon {
    name: string,
    url: string
}

interface Sprites {
    front_default: string,
    other: {
        'official-artwork': {
            front_default: string
        }
    }
}

export interface PokemonInfo {
    sprites: Sprites,
    [key: string]: any,
}

const PokemonCard: FC<BasePokemon> = ({name, url}) => {
    const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | null>(null);

    useEffect(() => {
        communicator.get(url).then((res: PokemonInfo) => {
            setPokemonInfo(res);
        })
    }, [])

    if (!pokemonInfo) {
        return null;
    }

    return  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokemonInfo.sprites.other["official-artwork"].front_default} />
        <Card.Body>
            <Card.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
}

export default PokemonCard;