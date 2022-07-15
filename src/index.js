import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/about';
import Contact from './pages/contact';
import Page from './pages/page';
import News from './pages/news';
import NewsDetails from './pages/newsDetails';
import Videos from './pages/videos';
import PictureGallery from './pages/pictureGallery';
import CaseFile from './pages/caseFile';
import CauseList from './pages/causeList';
import Help from './pages/help';
import FAQ from './pages/faq';
import Team from './pages/team';
import Terms from './pages/terms';
import Privacy from './pages/privacy';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/index.html" element={<App />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page" element={<Page />} />
          <Route path="/news" element={<News />} />
          <Route path="/news.html" element={<News />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<PictureGallery />} />
          <Route path="/cause-list" element={<CauseList />} />
          <Route path="/case-file" element={<CaseFile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq.html" element={<FAQ />} />
          <Route path="/blog-details.html" element={<NewsDetails />} />
          <Route path="/team.html" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
