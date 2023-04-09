import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Login from './Login';
import {store} from './Store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Profile></Profile>
      <Login></Login>
      <Test> </Test>
      </Provider>
    </div>
  );
}

export default App;
