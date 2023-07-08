import { Route, Router, Routes } from '@solidjs/router';

// Pages
import Home from './pages/Home';

const Routing = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )

export default Routing