import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Main from './components/Main';

const App = () => (
  <Routes>
    <Route path="/Befa" element={<MainLayout />}>
      <Route path="" element={<Main />} />
    </Route>
  </Routes>
);

export default App;
