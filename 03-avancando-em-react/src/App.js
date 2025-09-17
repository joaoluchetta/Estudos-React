import './App.css';

import Lego from './assets/imgLego.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Img em public */}
      <div>
        <img src="/imgAviao.jpg" alt="Avião na Floresta" />
      </div>

      {/* Img em asset*/}
      <div>
        <img src={Lego} alt="Cabeça de bonequinhos lego" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
