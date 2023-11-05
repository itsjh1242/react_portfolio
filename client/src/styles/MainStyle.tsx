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
`;

export const DesktopProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  gap: 20px;
`;

export const MobileProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

export const DesktopProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 50%;
  height: 100%;

  // Media Query 1440px
  & .NameF {
    font-size: 100px;
    font-weight: bold;
  }

  & .NameS {
    font-size: 60px;
    font-weight: bold;
  }

  @media (max-width: 1440px) {
    & .NameF {
      font-size: 80px;
      font-weight: bold;
    }

    & .NameS {
      font-size: 50px;
      font-weight: bold;
    }
  }
`;

export const MobileProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 50%;
  height: 100%;

  & .NameF {
    font-size: 30px;
    font-weight: bold;
  }

  & .NameS {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const DesktopProfileContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  gap: 20px;
  width: 100%;

  & .Email {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 12px 16px;
    gap: 10px;

    & p {
      font-size: 20px;
      color: #000000;
    }
  }

  & .Github {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #ffffff;
    width: 48px;
    height: 48px;
    gap: 10px;
  }
`;

export const MobileProfileContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  gap: 20px;
  width: 100%;

  & .Email {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 12px 16px;
    gap: 4px;
    width: 150px;
    height: 48px;

    & p {
      font-size: 12px;
      color: #000000;
    }
  }

  & .Github {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #ffffff;
    width: 48px;
    height: 48px;
    gap: 10px;
  }
`;

export const DesktopProfileCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 30%;
  height: 100%;
`;

export const MobileProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const DesktopProfileImageBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #4b4b4b;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MobileProfileImageBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #4b4b4b;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DesktopProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 10%;
  height: 100%;

  & .element {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 12px;
    width: 200px;
    height: auto;

    & .title {
      font-size: 40px;
      font-weight: bold;
    }
    & .content {
      text-align: right;
      font-size: 20px;
      font-weight: bold;
      color: #d3d3d3;
    }
  }
`;

export const MobileProfileUnder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & .element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: auto;

    & .title {
      font-size: 32px;
      font-weight: bold;
    }
    & .content {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #d3d3d3;
    }
  }
`;
