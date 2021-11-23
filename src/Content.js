import About from './About';
import Landing from './Landing';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

const Content = props => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default Content;
