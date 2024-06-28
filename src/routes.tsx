
import { Category, Search } from '@pages';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Router>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="*" element={<Navigate to="/search" />} />
        </Routes>
      </Router>
    );
}