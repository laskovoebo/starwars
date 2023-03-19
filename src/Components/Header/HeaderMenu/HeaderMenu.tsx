import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderMenuComponent = styled.div`
  display: flex;
  height: 46px;
`;

const StyledLink = styled(Link)<{ active: boolean }>`
  display: flex;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  color: #f6f7f9;
  border-bottom: ${({ active }) => (active ? '3px solid #cfdab0' : 'none')};
  margin-left: 74px;
  text-decoration: none;
`;

const HeaderMenu: FC = () => {
  const location = useLocation();

  const activeHome = useMemo(
    () => location.pathname === '/',
    [location.pathname],
  );
  const activeCharacters = useMemo(
    () => location.pathname === '/characters',
    [location.pathname],
  );

  return (
    <HeaderMenuComponent>
      <StyledLink to="/" active={activeHome}>
        Home
      </StyledLink>
      <StyledLink to="/characters" active={activeCharacters}>
        Characters
      </StyledLink>
    </HeaderMenuComponent>
  );
};

export default React.memo(HeaderMenu);
