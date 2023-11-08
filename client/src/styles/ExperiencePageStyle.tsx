import styled from 'styled-components';

// DesktopSide
export const DesktopComponentBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 5px 0px;

  & > p {
    font-size: 20px;
    font-family: 'Montserrat-Bold';
  }
`;

// MobileSide
export const MobileComponentBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 5px 0px;

  & > p {
    font-size: 14px;
    font-family: 'Montserrat-Bold';
  }
`;

export const DesktopComponentHide = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: 20px;

  & > .Description {
    font-size: 28px;
    font-family: 'Montserrat-Bold';
  }
`;
