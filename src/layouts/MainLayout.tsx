import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout: React.FC = () => {
  return (
    <div className="max-w-full bg-bodyBlack">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
