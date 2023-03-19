import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import NotFound from './404/NotFound';
import Characters from './Characters/Characters';
import Home from './Home/Home';

const PagesComponents = styled.div`
  display: flex;
  width: 100%;
`;

const Pages: FC = () => (
  <PagesComponents>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </PagesComponents>
);

export default Pages;
