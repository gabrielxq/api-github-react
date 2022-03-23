import React, { useContext } from 'react';
import BoxUsuario from '../components/BoxUsuario';
import { context } from '../context';

const UserInfo = () => {
    const ctx = useContext(context);

    return (
        <BoxUsuario name={ctx.userData?.name} login={ctx.userData?.login} avatar_url={ctx.userData?.avatar_url} 
        bio={ctx.userData?.bio} public_repos={ctx.userData?.public_repos} starred_url={ctx.userData?.starred_url}
        followers={ctx.userData?.followers} html_url={ctx.userData?.html_url} />
    );
}

export default UserInfo;