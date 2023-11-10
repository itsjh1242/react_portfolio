import React, { useState } from 'react';
import '../App.css';
import { Desktop, Mobile } from '../MediaQuery';
import * as S from '../config';
import * as G from '../styles/MainStyle';
import * as D from '../styles/SkillPageStyle';

function Skill() {
  const [LanguagesToggleState, setLanguagesToggleState] = useState(false);
  const toggleLanguages = () => {
    setLanguagesToggleState(!LanguagesToggleState);
  };

  const [LicensesToggleState, setLicensesToggleState] = useState(true);
  const toggleLicenses = () => {
    setLicensesToggleState(!LicensesToggleState);
  };

  const [AwardsToggleState, setAwardsToggleState] = useState(true);
  const toggleAwards = () => {
    setAwardsToggleState(!AwardsToggleState);
  };

  const [AwardsComponentToggleState, setAwardsComponentToggleState] = useState(
    S.MainPageConfig.Skills.Awards.map(() => true),
  );
  const toggleAwardsComponent = (index: number) => {
    const newAwardsComponentToggleState = [...AwardsComponentToggleState];
    newAwardsComponentToggleState[index] =
      !newAwardsComponentToggleState[index];
    setAwardsComponentToggleState(newAwardsComponentToggleState);
  };

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
              {/* Languages */}
              <D.ContentFrame padding="30px">
                <D.ComponentTitle
                  isdesktop="true"
                  isleft={LanguagesToggleState ? 'true' : 'false'}
                >
                  <p>Languages</p>
                  <button onClick={() => toggleLanguages()}>
                    <img
                      src={
                        LanguagesToggleState
                          ? S.MainPageConfig.ToggleLeft
                          : S.MainPageConfig.ToggleDown
                      }
                      alt=""
                    />
                  </button>
                </D.ComponentTitle>
                <D.HideComponent
                  className={LanguagesToggleState ? 'hide' : 'show'}
                  gap="20px"
                  marginTop="20px"
                >
                  <D.DekstopLanguageComponent>
                    {S.MainPageConfig.Skills.Language.map((item, index) => (
                      <D.LanguageBox
                        key={index}
                        width="120px"
                        height="120px"
                        gap="10px"
                        fontSize="32px"
                      >
                        <img src={'./flags/' + item.Language + '.png'} alt="" />
                        <p>{item.Level}</p>
                      </D.LanguageBox>
                    ))}
                  </D.DekstopLanguageComponent>
                </D.HideComponent>
              </D.ContentFrame>
              {/* Licenses */}
              <D.ContentFrame padding="30px">
                <D.ComponentTitle
                  isdesktop="true"
                  isleft={LicensesToggleState ? 'true' : 'false'}
                >
                  <p>Licenses</p>
                  <button onClick={() => toggleLicenses()}>
                    <img
                      src={
                        LicensesToggleState
                          ? S.MainPageConfig.ToggleLeft
                          : S.MainPageConfig.ToggleDown
                      }
                      alt=""
                    />
                  </button>
                </D.ComponentTitle>
                <D.HideComponent
                  className={LicensesToggleState ? 'hide' : 'show'}
                  gap="20px"
                  marginTop="20px"
                >
                  <D.DesktopLicenseComponent>
                    {S.MainPageConfig.Skills.License.map((item, index) => (
                      <p>• {item}</p>
                    ))}
                  </D.DesktopLicenseComponent>
                </D.HideComponent>
              </D.ContentFrame>
              {/* Award */}
              <D.ContentFrame padding="30px">
                <D.ComponentTitle
                  isdesktop="true"
                  isleft={AwardsToggleState ? 'true' : 'false'}
                >
                  <p>Awards</p>
                  <button onClick={() => toggleAwards()}>
                    <img
                      src={
                        AwardsToggleState
                          ? S.MainPageConfig.ToggleLeft
                          : S.MainPageConfig.ToggleDown
                      }
                      alt=""
                    />
                  </button>
                </D.ComponentTitle>
                <D.HideComponent
                  className={AwardsToggleState ? 'hide' : 'show'}
                  gap="20px"
                  marginTop="20px"
                >
                  {S.MainPageConfig.Skills.Awards.map((item, index) => (
                    <D.DesktopAwardComponent key={index}>
                      <D.ComponentTitle
                        isdesktop="true"
                        isleft={AwardsComponentToggleState ? 'true' : 'false'}
                      >
                        <p>{item.Title}</p>
                      </D.ComponentTitle>
                    </D.DesktopAwardComponent>
                  ))}
                </D.HideComponent>
              </D.ContentFrame>
              {/* Award - End */}
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
              {/* Languages */}
              <D.ContentFrame padding="18px">
                <D.ComponentTitle
                  isdesktop="false"
                  isleft={LanguagesToggleState ? 'true' : 'false'}
                >
                  <p>Languages</p>
                  <button onClick={() => toggleLanguages()}>
                    <img
                      src={
                        LanguagesToggleState
                          ? S.MainPageConfig.ToggleLeft
                          : S.MainPageConfig.ToggleDown
                      }
                      alt=""
                    />
                  </button>
                </D.ComponentTitle>
                <D.HideComponent
                  className={LanguagesToggleState ? 'hide' : 'show'}
                  gap="10px"
                  marginTop="10px"
                >
                  <D.MobileLanguageComponent>
                    {S.MainPageConfig.Skills.Language.map((item, index) => (
                      <D.LanguageBox
                        key={index}
                        width="50px"
                        height="50px"
                        gap="5px"
                        fontSize="16px"
                      >
                        <img src={'./flags/' + item.Language + '.png'} alt="" />
                        <p>{item.Level}</p>
                      </D.LanguageBox>
                    ))}
                  </D.MobileLanguageComponent>
                </D.HideComponent>
              </D.ContentFrame>
              {/* Licenses */}
              <D.ContentFrame padding="18px">
                <D.ComponentTitle
                  isdesktop="false"
                  isleft={LicensesToggleState ? 'true' : 'false'}
                >
                  <p>Licenses</p>
                  <button onClick={() => toggleLicenses()}>
                    <img
                      src={
                        LicensesToggleState
                          ? S.MainPageConfig.ToggleLeft
                          : S.MainPageConfig.ToggleDown
                      }
                      alt=""
                    />
                  </button>
                </D.ComponentTitle>
                <D.HideComponent
                  className={LicensesToggleState ? 'hide' : 'show'}
                  gap="20px"
                  marginTop="20px"
                >
                  <D.MobileLicenseComponent>
                    {S.MainPageConfig.Skills.License.map((item, index) => (
                      <p>• {item}</p>
                    ))}
                  </D.MobileLicenseComponent>
                </D.HideComponent>
              </D.ContentFrame>
              {/* License - End */}
              {/* Award */}
              <D.ContentFrame padding="18px">
                <D.ComponentTitle
                  isdesktop="false"
                  isleft={AwardsToggleState ? 'true' : 'false'}
                >
                  <p>Awards</p>
                  <button onClick={() => toggleAwards()}>
                    <img
                      src={
                        AwardsToggleState
                          ? S.MainPageConfig.ToggleLeft
                          : S.MainPageConfig.ToggleDown
                      }
                      alt=""
                    />
                  </button>
                </D.ComponentTitle>
                <D.HideComponent
                  className={AwardsToggleState ? 'hide' : 'show'}
                  gap="10px"
                  marginTop="10px"
                >
                  {S.MainPageConfig.Skills.Awards.map((item, index) => (
                    <D.DesktopAwardComponent key={index}>
                      <D.ComponentTitle
                        isdesktop="false"
                        isleft={AwardsComponentToggleState ? 'true' : 'false'}
                      >
                        <p>{item.Title}</p>
                      </D.ComponentTitle>
                    </D.DesktopAwardComponent>
                  ))}
                </D.HideComponent>
              </D.ContentFrame>
              {/* Award - End */}
            </G.MobileBodyFrame>
          </G.GlobalMobileContainer>
        </G.GlobalMobileFrame>
      </Mobile>
    </>
  );
}

export default Skill;
