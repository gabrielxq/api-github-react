import React, { useContext } from 'react';
import Seguidores from '../components/Seguidores';
import { context } from '../context';

const Followers = () => {
    const ctx = useContext(context);

    return (
        <Seguidores login={ctx.userData?.login} />
    );
}

export default Followers;