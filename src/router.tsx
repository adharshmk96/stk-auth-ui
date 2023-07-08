import { Route, Router, Routes } from '@solidjs/router';

// Pages
import Login from './pages/Login';

const Routing = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )

export default Routing