import styled from 'styled-components';

// Global Side
interface ComponentTitleProps {
  isdesktop: String;
  isleft: String;
}
export const ComponentTitle = styled.div<ComponentTitleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  & > button {
    width: ${(props) =>
      props.isdesktop === 'true' && props.isleft === 'true'
        ? '28px'
        : props.isdesktop === 'true' && props.isleft === 'false'
        ? '35px'
        : props.isleft === 'true'
        ? '10px'
        : '15px'};
    height: ${(props) =>
      props.isdesktop === 'true' && props.isleft === 'true'
        ? '35px'
        : props.isdesktop === 'true' && props.isleft === 'false'
        ? '28px'
        : props.isleft === 'true'
        ? '15px'
        : '10px'};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > p {
    font-size: ${(props) => (props.isdesktop === 'true' ? '48px' : '24px')};
    font-family: 'Montserrat-Bold';
  }
`;

interface HideComponentProps {
  gap: string;
  marginTop: string;
}
export const HideComponent = styled.div<HideComponentProps>`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: ${(props) => props.gap};
  margin-top: ${(props) => props.marginTop};
`;

interface ContentFrameProps {
  padding: string;
}
export const ContentFrame = styled.div<ContentFrameProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding};
  border: 1px solid #ffffff;
`;

interface LanguageBoxProps {
  width: string;
  height: string;
  gap: string;
  fontSize: string;
}

export const LanguageBox = styled.div<LanguageBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  font-size: ${(props) => props.fontSize};
  font-family: 'Montserrat-Bold';

  & > img {
    width: 100%;
    height: 100%;
  }
`;

// DesktopSide
export const DekstopLanguageComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
// MobileSide
export const MobileLanguageComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const DesktopLicenseComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 8px;

  & > p {
    font-size: 24px;
    font-family: 'Montserrat-Regular';
  }
`;

export const MobileLicenseComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 4px;

  & > p {
    font-size: 14px;
    font-family: 'Montserrat-Regular';
  }
`;

export const DesktopAwardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 20px;
  border: 1px solid #ffffff;
  padding: 20px 15px;
`;

export const MobileAwardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  border: 1px solid #ffffff;
  padding: 10px 5px;
`;

interface AwardSubtitleProps {
  fontSize: string;
}
export const AwardSubtitle = styled.div<AwardSubtitleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  & > p {
    font-size: ${(props) => props.fontSize};
    font-family: 'Montserrat-Regular';
  }
`;

interface AwardTitleProps {
  fontSize: string;
}
export const AwardTitle = styled.p<AwardTitleProps>`
  font-size: ${(props) => props.fontSize};
  font-family: 'Montserrat-Bold';
`;

interface AwardContentProps {
  fontSize: string;
}
export const AwardContent = styled.p<AwardContentProps>`

  font-size: ${(props) => props.fontSize};
  font-family: 'Montserrat-Regular';
`;

