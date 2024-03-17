import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Back to home</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
export default NotFoundPage;
