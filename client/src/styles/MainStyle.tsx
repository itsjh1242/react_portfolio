import styled from 'styled-components';

// Desktop Side
export const DesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1200px;
  padding: 60px 120px;
`;

// Mobile Side
export const MobileConatiner = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  padding: 15px 30px;
`;

export const DesktopDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MobileDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DesktopHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  & .Title {
    font-size: 30px;
    font-weight: bold;
  }

  & .NameF {
    font-size: 70px;
    font-weight: bold;
    padding-top: 30px;
  }

  & .NameS {
    font-size: 60px;
    font-weight: bold;
  }
`;

export const MobileHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  & .Title {
    font-size: 24px;
    font-weight: bold;
  }

  & .NameF {
    font-size: 40px;
    font-weight: bold;
    padding-top: 30px;
  }

  & .NameS {
    font-size: 30px;
    font-weight: bold;
  }
`;
