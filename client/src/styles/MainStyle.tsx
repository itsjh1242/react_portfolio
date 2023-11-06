import styled from 'styled-components';

// Desktop Side
export const DesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1200px;
  padding: 30px 120px;
`;

// Mobile Side
export const MobileConatiner = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  padding: 10px 30px;
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
  justify-content: center;
  width: 100%;
  height: 100%;

  & .Title {
    padding-bottom: 40px;
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
    padding-bottom: 20px;
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
  margin-top: 80px;
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

  & .NameF {
    font-size: 100px;
    font-weight: bold;
  }

  & .NameS {
    font-size: 60px;
    font-weight: bold;
  }

  @media (max-width: 1630px) {
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
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding-top: 20px;
gap: 4px;
width: 100%;

& p {
  font-family: Montserrat-Bold;
  font-size: 20px;
  color: white;
}

& .Email {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;

  & img {
    width: 32px;
    height: 32px;
  }
}

& .Github {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  
  & a > img {
    width: 32px;
    height: 32px;
  }
}
`;

export const MobileProfileContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  gap: 4px;
  width: 100%;

  & .Email {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    width: 100%;

    & img {
      width: 24px;
      height: 24px;
    }

    & p {
      font-family: Montserrat-Bold;
      font-size: 12px;
      color: white;
    }
  }

  & .Github {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    width: 100%;
    
    & a > img {
      width: 24px;
      height: 24px;
    }

    & p {
      font-family: Montserrat-Bold;
      font-size: 12px;
      color: white;
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

export const DesktopBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

export const MobileBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

export const DesktopBodyMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 90%;
  height: 100%;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
  transition: all 0.5s;

  & > .DesktopBodyMenuLink {
    font-size: 24px;
    font-family: 'Montserrat-Bold';
    text-decoration: underline;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    & {
      padding-bottom: 14px;
    }
    & .DesktopBodyMenuLink {
      opacity: 1;
    }
  }
`;

export const MobileBodyMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ffffff;

  & > .MobileBodyMenuLink {
    font-size: 12px;
    font-family: 'Montserrat-Bold';
    text-decoration: underline;
    opacity: 0;
    transition: all 0.5s;
  }
`;

export const DesktopBodyMenuRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const MobileBodyMenuRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const DesktopBodyMenuTitle = styled.p`
  font-size: 54px;
  font-family: 'Montserrat-Bold';
  padding-bottom: 12px;
`;

export const MobileBodyMenuTitle = styled.p`
  font-size: 30px;
  font-family: 'Montserrat-Bold';
  padding-bottom: 8px;
`;

export const DesktopBodyMenuContent = styled.p`
  font-size: 24px;
  font-family: 'Montserrat-Regular';
`;

export const MobileBodyMenuContent = styled.p`
  font-size: 12px;
  font-family: 'Montserrat-Regular';
`;

export const DesktopBodyMenuLink = styled.a`
  font-size: 24px;
  font-family: 'Montserrat-Bold';
  text-decoration: underline;
  opacity: 0;
  transition: 0.3s;
`;
