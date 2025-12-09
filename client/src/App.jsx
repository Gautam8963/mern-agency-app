import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import LandingPage from './pages/LandingPage/LandingPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProjectsPage from './pages/Admin/ProjectsPage';
import ClientsPage from './pages/Admin/ClientsPage';
import ContactsPage from './pages/Admin/ContactsPage';
import SubscribersPage from './pages/Admin/SubscribersPage';
import ScrollToHash from './components/common/ScrollToHash';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="subscribers" element={<SubscribersPage />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
