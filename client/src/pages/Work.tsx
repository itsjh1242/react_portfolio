import '../App.css';
import { Desktop, Mobile } from '../MediaQuery';
import * as S from '../config';
import * as G from '../styles/MainStyle';
import * as D from '../styles/WorkPageStyle';

function Work() {
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
                <p>{S.MainPageConfig.Works.Title}</p>
              </G.DesktopMenuTitle>
              <G.DesktopMenuDesc>
                {S.MainPageConfig.Works.Desc}
              </G.DesktopMenuDesc>
            </G.DesktopMenuHeader>
            <G.DesktopBodyFrame>
              {S.MainPageConfig.Works.Content.map((item, index) => (
                <G.DesktopComponentFrame>
                  <G.DesktopComponentTitle>
                    <p>{item.Title}</p>
                    <button>
                      <img src={S.MainPageConfig.ToggleDown} alt="" />
                    </button>
                  </G.DesktopComponentTitle>
                </G.DesktopComponentFrame>
              ))}
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
                <p>{S.MainPageConfig.Works.Title}</p>
              </G.MobileMenuTitle>
              <G.MobileMenuDesc>{S.MainPageConfig.Works.Desc}</G.MobileMenuDesc>
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

export default Work;
