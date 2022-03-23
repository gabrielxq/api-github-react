import React from 'react';
import './BoxUsuario.css';
import { useHistory } from 'react-router-dom';
import VoltarBtn from '../../assets/Voltar.png'

const DetalhesUsuario = props => {
  const history = useHistory();
  const handleOnClick = route => history.push(route);

  return(
    <div className='container'>
        <div className='container-usuario'>
          <div className='container-usuario__wrap'>
            
          <div className='btn__botao-voltar' onClick={() => handleOnClick('/')}>
              <img src={VoltarBtn}/><span>Voltar</span>
            </div>
              <span className='container-usuario__title'>{props.name}</span>
              <span className='container-usuario__subtitle'>#{props.login}</span>
                
              <span className='container-usuario__img-wrapper'>
                <a href={props?.html_url} target="_blank">
                  <img className="container-usuario__img" src={props?.avatar_url}></img>
                </a>
              </span>

              <span className='container-usuario__description-bio'>
                {props?.bio}
              </span>

              <div class="btn-group">
                <button type='button' onClick={() => handleOnClick('/repos')}>
                  {props.public_repos} Repositorios
                </button>
                <button type='button' onClick={() => handleOnClick('/followers')}>{props.followers} Seguidores</button>
                <button type='button' onClick={() => handleOnClick('/starred')}>Favoritos</button>
              </div>

          </div>
        </div>
      </div>
  )
}

export default DetalhesUsuario;
