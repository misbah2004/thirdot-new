
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Layout from './components/layout/layout'
import Portfolio from './pages/portfolio/portfolio'
import Services from './pages/services/services'
import Blog from './pages/blog/blog'
import Contact from './pages/contact/contact'
import PrivacyPolicy from './pages/privacy/privacy-policy'
import { TermsAndConditions } from './pages/terms/terms&condition'
import BlogDetail from './pages/blog/blog-detail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App