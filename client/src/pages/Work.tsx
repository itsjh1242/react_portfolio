import React, { useState } from 'react';
import '../App.css';
import { Desktop, Mobile } from '../MediaQuery';
import * as S from '../config';
import * as G from '../styles/MainStyle';
import * as D from '../styles/WorkPageStyle';

function Work() {
  const [hiddenState, setHiddenState] = useState(
    S.MainPageConfig.Works.Content.map(() => true),
  );

  const toggleDescription = (index: number) => {
    const newHiddenState = [...hiddenState];
    newHiddenState[index] = !newHiddenState[index];
    setHiddenState(newHiddenState);
  };

  const [ImageSlideCount, setImageSlideCount] = useState(
    S.MainPageConfig.Works.Content.map(() => 0),
  );

  const ImageCount = (index: number, plus: boolean) => {
    const newImageSlideCount = [...ImageSlideCount];
    const imageLength = S.MainPageConfig.Works.Content[index].Image.length;
    if (plus) {
      console.log(S.MainPageConfig.Works.Content[index].Image.length);
      newImageSlideCount[index] = (newImageSlideCount[index] + 1) % imageLength;
    } else {
      newImageSlideCount[index] =
        (newImageSlideCount[index] - 1 + imageLength) % imageLength;
    }
    setImageSlideCount(newImageSlideCount);
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
                <p>{S.MainPageConfig.Works.Title}</p>
              </G.DesktopMenuTitle>
              <G.DesktopMenuDesc>
                {S.MainPageConfig.Works.Desc}
              </G.DesktopMenuDesc>
            </G.DesktopMenuHeader>
            <G.DesktopBodyFrame>
              {S.MainPageConfig.Works.Content.map((item, index) => (
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
                    <p>Tech Stacks</p>
                    <D.DesktopComponentStack>
                      {item.Stacks.map((stack, s_index) => (
                        <img
                          src={'./stacks/' + stack + '.png'}
                          alt=""
                          key={s_index}
                        />
                      ))}
                    </D.DesktopComponentStack>
                    <G.DesktopComponentHide
                      className={hiddenState[index] ? 'hide' : 'show'}
                    >
                      <G.ComponentCol isdesktop="true">
                        <G.DesktopContentTitle>
                          Description
                        </G.DesktopContentTitle>
                        <G.DesktopDescriptionContent>
                          {item.Description}
                        </G.DesktopDescriptionContent>
                      </G.ComponentCol>
                      <G.ComponentCol isdesktop="true">
                        <G.DesktopContentTitle>Role</G.DesktopContentTitle>
                        <D.DesktopRoleContent>
                          {item.Role.map((Role, r_index) => (
                            <p key={r_index}>• {Role}</p>
                          ))}
                        </D.DesktopRoleContent>
                      </G.ComponentCol>
                      <G.DesktopContentTitle>Images</G.DesktopContentTitle>
                      <G.DesktopImageSlider>
                        <button onClick={() => ImageCount(index, false)}>
                          <img src={S.MainPageConfig.ToggleLeft} alt="" />
                        </button>
                        <G.DekstopImageBox>
                          <img
                            src={item.Image[ImageSlideCount[index]]}
                            alt=""
                          ></img>
                        </G.DekstopImageBox>
                        <button onClick={() => ImageCount(index, true)}>
                          <img src={S.MainPageConfig.ToggleRight} alt="" />
                        </button>
                      </G.DesktopImageSlider>
                    </G.DesktopComponentHide>
                  </D.DesktopComponentBody>
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
              {S.MainPageConfig.Works.Content.map((item, index) => (
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
                    <p>Tech Stacks</p>
                    <D.MobileComponentStack>
                      {item.Stacks.map((stack, s_index) => (
                        <img
                          src={'./stacks/' + stack + '.png'}
                          alt=""
                          key={s_index}
                        />
                      ))}
                    </D.MobileComponentStack>
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
                      <G.MobileContentTitle>Role</G.MobileContentTitle>
                      <D.MobileRoleContent>
                        {item.Role.map((Role, r_index) => (
                          <p key={r_index}>• {Role}</p>
                        ))}
                      </D.MobileRoleContent>
                    </G.ComponentCol>
                    <G.MobileContentTitle>Images</G.MobileContentTitle>
                    <G.MobileImageSlider>
                      <button onClick={() => ImageCount(index, false)}>
                        <img src={S.MainPageConfig.ToggleLeft} alt="" />
                      </button>
                      <G.MobileImageBox>
                        <img
                          src={item.Image[ImageSlideCount[index]]}
                          alt=""
                        ></img>
                      </G.MobileImageBox>
                      <button onClick={() => ImageCount(index, true)}>
                        <img src={S.MainPageConfig.ToggleRight} alt="" />
                      </button>
                    </G.MobileImageSlider>
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

export default Work;
