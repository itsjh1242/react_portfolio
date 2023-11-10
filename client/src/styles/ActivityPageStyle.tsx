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

interface ComponentSubTitleProps {
  fontSize: string;
  marginTop: string;
}
export const ComponentSubTitle = styled.div<ComponentSubTitleProps>`
  display: flex;
  align-items: center;
  justify-contents: flex-start;
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.marginTop};

  & > p {
    font-size: ${(props) => props.fontSize};
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
