import Home from './Routes/home/home.component';
import Navigation from './Routes/Navigation/navigation.component';
import { Routes, Route, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
