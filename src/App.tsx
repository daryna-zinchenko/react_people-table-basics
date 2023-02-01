import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import { PeoplePage } from './components/PeoplePage/PeoplePage';
import { HomePage } from './components/HomePage/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people">
              <Route index element={<PeoplePage />} />
            </Route>

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
