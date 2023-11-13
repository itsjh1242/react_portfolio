import styled from 'styled-components';

// DesktopSide
export const DesktopComponentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;

  & > p {
    font-size: 28px;
    font-family: 'Montserrat-Bold';
  }
`;

// MobileSide
export const MobileComponentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 100%;

  & > p {
    font-size: 14px;
    font-family: 'Montserrat-Bold';
  }
`;

export const DesktopComponentStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 5px 0px;

  & > img {
    width: 40px;
    height: 40px;
  }
`;

export const MobileComponentStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px 0px;

  & > img {
    width: 30px;
    height: 30px;
  }
`;

export const DesktopRoleContent = styled.div`
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

export const MobileRoleContent = styled.div`
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
