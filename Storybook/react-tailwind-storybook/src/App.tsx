import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const avatar =
    'https://images.pexels.com/photos/12346579/pexels-photo-12346579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  return (
    <div className="App">
      <Sidebar avatar={avatar} firstName="Elon" lastName="Mask" />
    </div>
  );
}

export default App;
