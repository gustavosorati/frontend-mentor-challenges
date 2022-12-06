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
  max-width: 960px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.white};
  display: flex;
  padding: 1rem;
  border-radius: 1rem;

`;

export const StepController = styled.div`
  background-image: url(${bgSidebarDesktop});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 1rem;
  width: 270px;
  height: 600px;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface StepProps {
  isActive: boolean;
}

export const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${({theme, isActive}) => isActive ? theme.COLORS['blue-light'] : 'transparent'};
    border: 1px solid ${({theme}) => theme.COLORS['white']};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
    color: ${({theme, isActive}) => isActive ? theme.COLORS['blue-marine']:  theme.COLORS['white']};
  }

  strong {
    font-size: .75rem;
    color: ${({theme}) => theme.COLORS['gray-light']};
    text-transform: uppercase;
  }

  p {
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
    color: ${({theme}) => theme.COLORS['white']};
    text-transform: uppercase;
    font-size: .875rem;
  }
`;

export const MultiStepForm = styled.div`
  flex: 1;
  padding: 1rem 6rem;
  overflow: hidden;

`;
