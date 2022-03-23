import React, { useContext } from 'react';
import Repositorios from '../components/Repositorios';
import { context } from '../context';

const Repos = () => {
    const ctx = useContext(context);

    return (
        <Repositorios login={ctx.userData?.login} />
    );
}

export default Repos;