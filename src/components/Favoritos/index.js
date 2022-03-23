import React, { useState, useEffect, useContext } from 'react';
import VoltarBtn from '../../assets/Voltar.png'
import { useHistory } from 'react-router-dom';
import './Favoritos.css'

const Favoritos = props => {

  const [userStarred, setUserStarred] = useState([]);
  const history = useHistory();
  const handleOnClick = route => history.push(route);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.login}/starred`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserStarred(data)
    })
  }, [])

  return (
    <div className='container'>
      <div className='container-favoritos'>
        <div className='container-favoritos__wrap'>
            <span className='container-favoritos__title'>Favoritos de {props.login}</span>
            <div className='btn__botao-voltar' onClick={() => handleOnClick('/userInfo')}>
              <img src={VoltarBtn}/><span>Voltar</span>
            </div>
            <section className='container-favoritos__inside-box'>
              <ol>
                {(userStarred).map(starred => (
                  <li onClick={() => window.location.href(starred?.html_url)} key={starred?.id}>
                    <a className='container-repositorios__text' href={starred?.html_url} target="_blank">
                      Nome: {starred?.name}<br /><br />  
                      Autor Original: {starred?.owner.login}<br />
                      Descrição: {starred?.description}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

        </div>
      </div>
    </div>
  );
}

export default Favoritos;
