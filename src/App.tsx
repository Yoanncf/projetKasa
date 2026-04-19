import React from 'react';
import './index.scss';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { CardPage } from './pages/cardPage/CardPage';


export const App: React.FC = () => {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="card/:id" element={<CardPage />} />
      </Routes>
    </Layout>
  )
}
