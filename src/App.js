import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Nav } from './components/Nav';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character';
function App() {
   return (
      <div className="App">
         <header className="App-header">
            <Nav />
            
            <Routes>
               <Route path='*' element={<h1>Page not found 404</h1>} />
               <Route path='/' element={<Home />} />
               <Route path='/about/*' element={<About />} />
               <Route path='/characters' element={<CharacterList />} />
               <Route path='/characters/:charId/*' element={<Character />}/>
            </Routes>
         </header>
      </div>
   );
}

export default App;
