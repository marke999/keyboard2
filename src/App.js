import './NavigationBar.css';
import NavigationBar from './NavigationBar';
import Keyboard_app from './keyboard';
import TextInput from './TextInput';

function App() {
  return (
    <div className="App">
      <div >
        <NavigationBar />
      </div>
      <div>
        <Keyboard_app />
      </div>
      <div>
        <TextInput />
      </div>
    </div>
  );
}

export default App;