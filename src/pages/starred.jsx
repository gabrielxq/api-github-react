import React, { useContext } from 'react';
import Favoritos from '../components/Favoritos';
import { context } from '../context';

const Starred = () => {
    const ctx = useContext(context);

    return (
        <Favoritos login={ctx.userData?.login} />
    );
}

export default Starred;