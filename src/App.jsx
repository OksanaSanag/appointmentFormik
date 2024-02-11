import { Routes, Route } from 'react-router-dom';

//Components
import Header  from './components/layout/Header';

//pages
import { Home, Doctors } from './pages';


function App() {
  return (
    <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
    </div>
  );
}

export default App;
