import styled from 'styled-components';
import bgSidebarDesktop from '../assets/images/bg-sidebar-desktop.svg';
import bgSidebarMobile from '../assets/images/bg-sidebar-mobile.svg';

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

  @media(max-width: 480px) {
    background-color: transparent;
  }
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

  @media(max-width: 480px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;

    background-image: url(${bgSidebarMobile});
    background-size: cover;

    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 2rem 0;

    justify-content: center;

    border-radius: 0;
  }
`;

interface StepProps {
  isActive: boolean;
}

export const Step = styled.div<StepProps>`
  display: flex;
  gap: 1rem;

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

  @media(max-width: 480px) {
    gap: 0;
    height: 50px;

    .circle {
      margin-right: .5rem;
    }

    strong, p {
      visibility: hidden;
      opacity: 0;
      display: none;
      height: 0;
      width: 0;
    }
  }
`;

export const MultiStepForm = styled.div`
  flex: 1;
  padding: 1rem 6rem;
  overflow: hidden;

  @media(max-width: 480px) {
    padding: 2rem 1.2rem;
    z-index: 8;
    border-radius: 8px;
    background-color: white;

    overflow: visible;
  }
`;
