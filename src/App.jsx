import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import StackPage from './pages/StackPage';
import ClientsPage from './pages/ClientsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="stack" element={<StackPage />} />
          <Route path="clientes" element={<ClientsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
