import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import ManageItem from './ManageItem/ManageItem';
import Login from './component/Login/Login';
import NothingFound from './component/NothingFound/NothingFound';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import ManageInventories from './component/ManageInventories/ManageInventories';
import AddItem from './component/AddItem/AddItem';
import MyItem from './component/MyItem/MyItem';
import Blogs from './component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/my-items' element={<MyItem></MyItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/add-inventory' element={<AddItem></AddItem>}></Route>
        <Route path='/manage-item/:_id' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NothingFound></NothingFound>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
