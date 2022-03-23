import React, { useContext } from 'react';
import BoxPesquisa from '../components/BoxPesquisa';
import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);

    return (
        <BoxPesquisa />
    );
}