import React, { useState } from 'react';
import '../App.css';
import { Desktop, Mobile } from '../MediaQuery';
import * as S from '../config';
import * as G from '../styles/MainStyle';
import * as D from '../styles/ActivityPageStyle';

function Activity() {
  const [hiddenState, setHiddenState] = useState(
    S.MainPageConfig.Activities.Content.map(() => true),
  );

  hiddenState[0] = false;

  const toggleDescription = (index: number) => {
    const newHiddenState = [...hiddenState];
    newHiddenState[index] = !newHiddenState[index];
    setHiddenState(newHiddenState);
  };

  const [ImageSlideCount, setImageSlideCount] = useState(
    S.MainPageConfig.Activities.Content.map(() => 0),
  );
  const ImageCount = (index: number, plus: boolean) => {
    const newImageSlideCount = [...ImageSlideCount];
    const imageLength = S.MainPageConfig.Activities.Content[index].Image.length;
    if (plus) {
      console.log(S.MainPageConfig.Activities.Content[index].Image.length);
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
                <p>{S.MainPageConfig.Activities.Title}</p>
              </G.DesktopMenuTitle>
              <G.DesktopMenuDesc>
                {S.MainPageConfig.Activities.Desc}
              </G.DesktopMenuDesc>
            </G.DesktopMenuHeader>
            <G.DesktopBodyFrame>
              {S.MainPageConfig.Activities.Content.map((item, index) => (
                <G.DesktopComponentFrame>
                <D.ComponentTitle
                    isdesktop="true"
                    isleft={hiddenState[index] ? 'true' : 'false'}
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
                  </D.ComponentTitle>
                  <D.ComponentSubTitle
                  fontSize='18px'
                  marginTop='10px'><p>{item.Period}</p>
                  </D.ComponentSubTitle>
                  <D.HideComponent
                    className={hiddenState[index] ? 'hide' : 'show'}
                    gap="20px"
                    marginTop="20px"
                  >
                  <G.ComponentCol isdesktop='true'>
                    <D.AwardTitle fontSize='28px'>Description</D.AwardTitle>
                    <D.AwardContent
                          fontSize='20px'>
                            {item.Description}
                        </D.AwardContent>
                  </G.ComponentCol>
                  <G.ComponentCol isdesktop='true'>
                      <D.AwardTitle
                          fontSize="28px">
                          Images
                        </D.AwardTitle>
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
                      </G.ComponentCol>
                </D.HideComponent>
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
                <p>{S.MainPageConfig.Activities.Title}</p>
              </G.MobileMenuTitle>
              <G.MobileMenuDesc>
                {S.MainPageConfig.Activities.Desc}
              </G.MobileMenuDesc>
            </G.MobileMenuHeader>
            <G.MobileBodyFrame>
            {S.MainPageConfig.Activities.Content.map((item, index) => (
                <G.MobileComponentFrame>
                <D.ComponentTitle
                    isdesktop="false"
                    isleft={ hiddenState[index] ? 'true' : 'false'}
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
                  </D.ComponentTitle>
                  <D.ComponentSubTitle
                  fontSize='12px'
                  marginTop='5px'><p>{item.Period}</p></D.ComponentSubTitle>
                  <D.HideComponent
                    className={hiddenState[index] ? 'hide' : 'show'}
                    gap="20px"
                    marginTop="20px"
                  >
                  <G.ComponentCol isdesktop='false'>
                    <D.AwardTitle fontSize='18px'>Description</D.AwardTitle>
                    <D.AwardContent
                          fontSize='14px'>
                            {item.Description}
                        </D.AwardContent>
                  </G.ComponentCol>
                  <G.ComponentCol isdesktop='false'>
                      <D.AwardTitle
                          fontSize="20px">
                          Images
                        </D.AwardTitle>
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
                      </G.ComponentCol>
                </D.HideComponent>
                </G.MobileComponentFrame>
              ))}
            </G.MobileBodyFrame>
          </G.GlobalMobileContainer>
        </G.GlobalMobileFrame>
      </Mobile>
    </>
  );
}

export default Activity;
