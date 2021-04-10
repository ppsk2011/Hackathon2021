import './App.css';
import HomePageComponent from './components/HomePageComponent';
import {Container} from '@material-ui/core'

function App() {
  return (
    // <Container maxWidth="sm">
    <div className="App">
      {/* // <header className="App-header"> */}
      <HomePageComponent/>
      {/* </header> */}
    </div>
    
  );
}

export default App;
