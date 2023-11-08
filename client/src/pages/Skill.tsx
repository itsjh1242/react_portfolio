import '../App.css';
import { Desktop, Mobile } from '../MediaQuery';
import * as S from '../config';
import * as G from '../styles/MainStyle';
import * as D from '../styles/SkillPageStyle';

function Skill() {
  return (
    <>
      {/* Desktop */}
      <Desktop>
        <G.GlobalDesktopFrame>
          <G.GlobalDesktopContainer>
            <G.DesktopMenuHeader>
              <G.DesktopMenuTitle>
                <a href="/">
                  <img src={S.MainPageConfig.GoBack} alt="" />
                </a>
                <p>{S.MainPageConfig.Skills.Title}</p>
              </G.DesktopMenuTitle>
              <G.DesktopMenuDesc>
                {S.MainPageConfig.Skills.Desc}
              </G.DesktopMenuDesc>
            </G.DesktopMenuHeader>
            <G.DesktopBodyFrame>
              <G.DesktopComponentFrame></G.DesktopComponentFrame>
            </G.DesktopBodyFrame>
          </G.GlobalDesktopContainer>
        </G.GlobalDesktopFrame>
      </Desktop>
      {/* Mobile */}
      <Mobile>
        <G.GlobalMobileFrame>
          <G.GlobalMobileContainer>
            <G.MobileMenuHeader>
              <G.MobileMenuTitle>
                <a href="/">
                  <img src={S.MainPageConfig.GoBack} alt="" />
                </a>
                <p>{S.MainPageConfig.Skills.Title}</p>
              </G.MobileMenuTitle>
              <G.MobileMenuDesc>
                {S.MainPageConfig.Skills.Desc}
              </G.MobileMenuDesc>
            </G.MobileMenuHeader>
            <G.MobileBodyFrame>
              <G.MobileComponentFrame></G.MobileComponentFrame>
            </G.MobileBodyFrame>
          </G.GlobalMobileContainer>
        </G.GlobalMobileFrame>
      </Mobile>
    </>
  );
}

export default Skill;
