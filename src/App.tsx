import React from 'react';
import './index.scss';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { CardPage } from './pages/cardPage/CardPage';
import { About } from './pages/about/About';
import { Error } from './pages/error/Error';

export const App: React.FC = () => {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="card/:id" element={<CardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/error404" element={<Error />} />
      </Routes>
    </Layout>
  )
}
