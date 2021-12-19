import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout';
import Homepage from './homepage/Homepage';
import Photospage from './photospage/Photospage'
import Contactpage from './contactpage/Contactpage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/photos/" element={<Photospage/>}>
            <Route path=":pageId" element={<Photospage/>}/>
            <Route path="id/:photoId" element={<Photospage/>}/>
          </Route>
          <Route path="/contact/" element={<Contactpage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
