import React, { useState, useContext } from 'react';
import './BoxPesquisa.css'
import githubLogo from '../../assets/github-logo.png';
import { context } from '../../context';
import { useHistory } from 'react-router-dom';


function BoxPesquisa() {

  const history = useHistory();
  const handleOnClick = route => history.push(route);
  const ctx = useContext(context)
  const [searchedValue, setSearchedValue] = useState('');
  const API_BASE = 'https://api.github.com/users';

  async function getUserData(e) {
    e.preventDefault()
    try{
      await fetch(`${API_BASE}/${searchedValue}`)
      .then(res => res.json())
      .then(data => {
        ctx.setUserData(data)
        handleOnClick('/userInfo');
      })
    } catch(err){
        console.log(err)
    }
  }

  return (
    <div className='container'>
      <div className='container-pesquisa'>
        <div className='container-pesquisa__wrap'>
          <form className='container-pesquisa__form' onSubmit={ () => handleOnClick('/userInfo') }>
            <span className='container-pesquisa__form-title'>Pesquisa API Github</span>

            <span className='container-pesquisa__img-wrapper'>
              <img src={githubLogo} alt='' />
            </span>

            <span className='container-pesquisa__form-description'>
              Insira o nome de usuário do Github desejado
              abaixo e clique em Pesquisar para obter mais
              informações sobre o perfil.
              </span>

            <div className='container-pesquisa__form-input'>
              <input value={searchedValue} onChange={e => setSearchedValue(e.target.value)} 
              className='input' type='string' placeholder='Nome do Usuário'/>
            </div>

            <div className='container-pesquisa__form-btn'>
              <button onClick={e => getUserData(e)} className='btn__form'>Pesquisar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default BoxPesquisa;
