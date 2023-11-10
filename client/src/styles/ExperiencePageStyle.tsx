import styled from 'styled-components';

export const DesktopResponsibilityTitle = styled.p`
  font-size: 28px;
  font-family: 'Montserrat-Bold';
`;
export const MobileResponsibilityTitle = styled.p`
  font-size: 20px;
  font-family: 'Montserrat-Bold';
`;

export const DesktopResponsibilityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  & > p {
    font-size: 18px;
    font-family: 'Montserrat-Regular';
  }
`;
export const MobileResponsibilityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;

  & > p {
    font-size: 14px;
    font-family: 'Montserrat-Regular';
  }
`;

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
