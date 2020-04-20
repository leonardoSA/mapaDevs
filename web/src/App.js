import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do GitHub</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7051958?s=460&u=5828677eb759c518f08b9f5fde487900742047d1&v=4" alt="Leonardo Araujo" />
              <div className="user-info">
                <strong>Leonardo Araujo</strong>
                <span>Reactjs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo porttitor, pretium leo nec, tincidunt odio.</p>
            <a href="https://github.com/leonardoSA">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7051958?s=460&u=5828677eb759c518f08b9f5fde487900742047d1&v=4" alt="Leonardo Araujo" />
              <div className="user-info">
                <strong>Leonardo Araujo</strong>
                <span>Reactjs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo porttitor, pretium leo nec, tincidunt odio.</p>
            <a href="https://github.com/leonardoSA">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7051958?s=460&u=5828677eb759c518f08b9f5fde487900742047d1&v=4" alt="Leonardo Araujo" />
              <div className="user-info">
                <strong>Leonardo Araujo</strong>
                <span>Reactjs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo porttitor, pretium leo nec, tincidunt odio.</p>
            <a href="https://github.com/leonardoSA">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7051958?s=460&u=5828677eb759c518f08b9f5fde487900742047d1&v=4" alt="Leonardo Araujo" />
              <div className="user-info">
                <strong>Leonardo Araujo</strong>
                <span>Reactjs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo porttitor, pretium leo nec, tincidunt odio.</p>
            <a href="https://github.com/leonardoSA">Acessar Perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
