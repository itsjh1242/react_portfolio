import React, { useState } from 'react';
import '../App.css';
import { Desktop, Mobile } from '../MediaQuery';
import * as S from '../config';
import * as G from '../styles/MainStyle';
import * as D from '../styles/ExperiencePageStyle';

function Experience() {
  const [hiddenState, setHiddenState] = useState(
    S.MainPageConfig.Experiences.Content.map((item, index) =>
      index === 0 ? false : true,
    ),
  );

  const toggleDescription = (index: number) => {
    const newHiddenState = [...hiddenState];
    newHiddenState[index] = !newHiddenState[index];
    setHiddenState(newHiddenState);
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
                <p>{S.MainPageConfig.Experiences.Title}</p>
              </G.DesktopMenuTitle>
              <G.DesktopMenuDesc>
                {S.MainPageConfig.Experiences.Desc}
              </G.DesktopMenuDesc>
            </G.DesktopMenuHeader>
            <G.DesktopBodyFrame>
              {S.MainPageConfig.Experiences.Content.map((item, index) => (
                <G.DesktopComponentFrame key={index}>
                  <G.DesktopComponentTitle>
                    <p>{item.Title}</p>
                    <button onClick={() => toggleDescription(index)}>
                      <img
                        src={
                          hiddenState[index]
                            ? S.MainPageConfig.ToggleLeft
                            : S.MainPageConfig.ToggleDown
                        }
                        alt=""
                      />
                    </button>
                  </G.DesktopComponentTitle>
                  <D.DesktopComponentBody>
                    <p>{item.Position}</p>
                    <p>•</p>
                    <p>{item.Period}</p>
                  </D.DesktopComponentBody>
                  <G.DesktopComponentHide
                    className={hiddenState[index] ? 'hide' : 'show'}
                  >
                    <G.ComponentCol isdesktop="true">
                      <G.DesktopContentTitle>Description</G.DesktopContentTitle>
                      <G.DesktopDescriptionContent>
                        {item.Description}
                      </G.DesktopDescriptionContent>
                    </G.ComponentCol>
                    <G.ComponentCol isdesktop="true">
                      <D.DesktopResponsibilityTitle>
                        Responsibilities
                      </D.DesktopResponsibilityTitle>
                      <D.DesktopResponsibilityContent>
                        {item.Responsibility.map((r_item, r_index) => (
                          <p key={r_index}>• {r_item}</p>
                        ))}
                      </D.DesktopResponsibilityContent>
                    </G.ComponentCol>
                  </G.DesktopComponentHide>
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
                <p>{S.MainPageConfig.Experiences.Title}</p>
              </G.MobileMenuTitle>
              <G.MobileMenuDesc>
                {S.MainPageConfig.Experiences.Desc}
              </G.MobileMenuDesc>
            </G.MobileMenuHeader>
            <G.MobileBodyFrame>
              {S.MainPageConfig.Experiences.Content.map((item, index) => (
                <G.MobileComponentFrame key={index}>
                  <G.MobileComponentTitle
                    IsLeft={hiddenState[index] ? true : false}
                  >
                    <p>{item.Title}</p>
                    <button onClick={() => toggleDescription(index)}>
                      <img
                        src={
                          hiddenState[index]
                            ? S.MainPageConfig.ToggleLeft
                            : S.MainPageConfig.ToggleDown
                        }
                        alt=""
                      />
                    </button>
                  </G.MobileComponentTitle>
                  <D.MobileComponentBody>
                    <p>{item.Position}</p>
                    <p>•</p>
                    <p>{item.Period}</p>
                  </D.MobileComponentBody>
                  <G.MobileComponentHide
                    className={hiddenState[index] ? 'hide' : 'show'}
                  >
                    <G.ComponentCol isdesktop="false">
                      <G.MobileContentTitle>Description</G.MobileContentTitle>
                      <G.MobileDescriptionContent>
                        {item.Description}
                      </G.MobileDescriptionContent>
                    </G.ComponentCol>
                    <G.ComponentCol isdesktop="false">
                      <D.MobileResponsibilityTitle>
                        Responsibilities
                      </D.MobileResponsibilityTitle>
                      <D.MobileResponsibilityContent>
                        {item.Responsibility.map((r_item, r_index) => (
                          <p key={r_index}>• {r_item}</p>
                        ))}
                      </D.MobileResponsibilityContent>
                    </G.ComponentCol>
                  </G.MobileComponentHide>
                </G.MobileComponentFrame>
              ))}
            </G.MobileBodyFrame>
          </G.GlobalMobileContainer>
        </G.GlobalMobileFrame>
      </Mobile>
    </>
  );
}

export default Experience;
