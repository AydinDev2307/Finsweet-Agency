import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './layout/Home';
import Service from './layout/Service';
import Company from './layout/Company';
import Career from './layout/Career';
import Blog from './layout/Blog';
import ContactUs from './layout/ContactUs';
import NotFound from './layout/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
