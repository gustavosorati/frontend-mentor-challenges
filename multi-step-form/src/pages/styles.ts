import styled from 'styled-components';
import bgSidebarDesktop from '../assets/images/bg-sidebar-desktop.svg';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS['magnolia']};
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.white};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;

`;

export const StepController = styled.div`
  background-image: url(${bgSidebarDesktop});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 1rem;
  width: 320px;
  height: 700px;
`;
