import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NothingFound from './component/NothingFound/NothingFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NothingFound></NothingFound>}></Route>
      </Routes>
      

      <Footer></Footer>
    </div>
  );
}

export default App;
