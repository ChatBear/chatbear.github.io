import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import { ConfigProvider } from 'antd';

import './assets/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#000', // Background color
          colorTextBase: '#FFFFFF', // Text color
          colorPrimary: '#1DA57A', // Primary color
        },
        components: {},
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);
