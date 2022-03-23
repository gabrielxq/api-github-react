import React, { useState, useEffect, useContext } from 'react';
import { context } from '../../context';
import VoltarBtn from '../../assets/Voltar.png'
import { useHistory } from 'react-router-dom';
import './Repositorios.css'

const Repositorios = props => {

  const [userRepos, setUserRepos] = useState([]);  
  const history = useHistory();
  const handleOnClick = route => history.push(route);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.login}/repos`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserRepos(data)
    })
  }, [])

  return (
    <div className='container'>
      <div className='container-repositorios'>
        <div className='container-repositorios__wrap'>
            <span className='container-repositorios__title'>Repositórios de {props.login}</span>
            <div className='btn__botao-voltar' onClick={() => handleOnClick('/userInfo')}>
              <img src={VoltarBtn}/><span>Voltar</span>
            </div>
            <section className='container-repositorios__inside-box'>
              <ol classname="list">
                {(userRepos).map(repo => (
                  <li className='item' key={repo?.id}>
                    <a className='container-repositorios__text' href={repo?.html_url} target="_blank">
                      Nome: {repo?.name}<br /><br />  
                      Descrição: {repo?.description}
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

export default Repositorios;
