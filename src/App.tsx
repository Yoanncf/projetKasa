import React from 'react';
import './App.scss';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';


export const App:React.FC = () => {


  return (
   <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
   </Layout>
  )
}
