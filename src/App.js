import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Home ></Home>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
