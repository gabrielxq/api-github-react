import React, { useState, useEffect, useContext } from 'react';
import './Seguidores.css'
import VoltarBtn from '../../assets/Voltar.png'
import { useHistory } from 'react-router-dom';

const Seguidores = props => {

  const [userFollowers, setUserFollowers] = useState([]);
  const history = useHistory();
  const handleOnClick = route => history.push(route);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.login}/followers`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserFollowers(data)
    })
  }, [])

  return (
    <div className='container'>
      <div className='container-seguidores'>
        <div className='container-seguidores__wrap'>
            <span className='container-seguidores__title'>Seguidores de {props.login}</span>
            <div className='btn__botao-voltar' onClick={() => handleOnClick('/userInfo')}>
              <img src={VoltarBtn}/><span>Voltar</span>
            </div>
            <section className='container-seguidores__inside-box'>
              <ol classname="list">
                {(userFollowers).map(fllws => (
                  <li className='item' onClick={() => window.location.href(fllws?.html_url)} key={fllws?.id}>
                        <a href={fllws?.html_url} target="_blank">
                            <img className='container-seguidores__img' src={fllws?.avatar_url} alt={fllws?.login} />
                        </a>
                        <span className='container-seguidores__text'>Nome: {fllws?.login}
                        </span>
                  </li>
                ))}
              </ol>
            </section>

        </div>
      </div>
    </div>
  );
}

export default Seguidores;
