import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import MembersPage from './Components/pages/MembersPage';
import Single from './Components/pages/Single';



function App() {
  return (
    <div className="App">

<Router>
  <nav className='nav'>
    <Link to='/'> <h3>Home</h3> </Link>
      <Link to='/members'> <h3>Employers</h3> </Link>

  </nav>

    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/members" element={<MembersPage />} />
        <Route path='/members/:id' element={<Single />}></Route>
    </Routes>
</Router>
    </div>
  );
}

export default App;
