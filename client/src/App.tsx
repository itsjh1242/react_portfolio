import React from 'react';
import './App.css';
// Media Query
import { Desktop, Mobile } from './MediaQuery';
import * as D from './styles/MainStyle';

import { Routes, Route, Link, NavLink } from 'react-router-dom';

// Import Config
import * as S from './config';

function App() {
  return (
    <>
      {/* Desktop */}
      <Desktop>
        <D.DesktopContainer>
          <D.DesktopDisplay>
            <D.DesktopHead>
              <h1 className="Title">{S.MainPageConfig.Title}</h1>
              <D.DesktopProfile>
                <D.DesktopProfileLeft>
                  <p className="NameF">{S.MainPageConfig.SubTitleF}</p>
                  <p className="NameS">{S.MainPageConfig.SubTitleS}</p>
                  <D.DesktopProfileContact>
                    <div className="Email">
                      <img src={S.MainPageConfig.ContactMailIconSrc} alt="" />
                      <p>{S.MainPageConfig.Email}</p>
                    </div>
                    <div className="Github">
                      <a href="https://github.com/itsjh1242">
                        <img
                          src={S.MainPageConfig.ContactGithubIconSrc}
                          alt=""
                        />
                      </a>
                    </div>
                  </D.DesktopProfileContact>
                </D.DesktopProfileLeft>
                <D.DesktopProfileCenter>
                  <D.DesktopProfileImageBox>
                    <img
                      src={S.MainPageConfig.ProfileImageSrc}
                      alt="ProfileImage"
                    ></img>
                  </D.DesktopProfileImageBox>
                </D.DesktopProfileCenter>
                <D.DesktopProfileRight>
                  {S.MainPageConfig.ProfileRightElement.map(
                    (element, index) => (
                      <div className="element" key={index}>
                        <div className="title">{element[0]}</div>
                        <div className="content">{element[1]}</div>
                      </div>
                    ),
                  )}
                </D.DesktopProfileRight>
              </D.DesktopProfile>
            </D.DesktopHead>
            <D.DesktopBody>
              {S.MainPageConfig.ProfileBodyElement.map((element, index) => (
                <D.DesktopBodyMenu>
                  <D.DesktopBodyMenuRow>
                    <D.DesktopBodyMenuTitle>
                      {element[0]}
                    </D.DesktopBodyMenuTitle>
                    <D.DesktopBodyMenuContent>
                      {element[1]}
                    </D.DesktopBodyMenuContent>
                  </D.DesktopBodyMenuRow>
                  <a href={element[2]} className="DesktopBodyMenuLink">
                    Go Page
                  </a>
                </D.DesktopBodyMenu>
              ))}
            </D.DesktopBody>
          </D.DesktopDisplay>
        </D.DesktopContainer>
      </Desktop>
      {/* Mobile */}
      <Mobile>
        <D.MobileConatiner>
          <D.MobileDisplay>
            <D.MobileHead>
              <h1 className="Title">{S.MainPageConfig.Title}</h1>
              <D.MobileProfile>
                <D.MobileProfileLeft>
                  <p className="NameF">{S.MainPageConfig.SubTitleF}</p>
                  <p className="NameS">{S.MainPageConfig.SubTitleS}</p>
                  <D.MobileProfileContact>
                    <div className="Email">
                      <img src={S.MainPageConfig.ContactMailIconSrc} alt="" />
                      <p>{S.MainPageConfig.Email}</p>
                    </div>
                    <div className="Github">
                      <a href="https://github.com/itsjh1242">
                        <img
                          src={S.MainPageConfig.ContactGithubIconSrc}
                          alt=""
                        />
                      </a>
                    </div>
                  </D.MobileProfileContact>
                </D.MobileProfileLeft>
                <D.MobileProfileRight>
                  <D.MobileProfileImageBox>
                    <img src={S.MainPageConfig.ProfileImageSrc} alt="" />
                  </D.MobileProfileImageBox>
                </D.MobileProfileRight>
              </D.MobileProfile>
              <D.MobileProfileUnder>
                {S.MainPageConfig.ProfileRightElement.map((element, index) => (
                  <div className="element" key={index}>
                    <div className="title">{element[0]}</div>
                    <div className="content">{element[1]}</div>
                  </div>
                ))}
              </D.MobileProfileUnder>
            </D.MobileHead>
            <D.MobileBody>
              {S.MainPageConfig.ProfileBodyElement.map((element, index) => (
                <D.MobileBodyMenu>
                  <D.MobileBodyMenuRow>
                    <D.MobileBodyMenuTitle>{element[0]}</D.MobileBodyMenuTitle>
                    <D.MobileBodyMenuContent>
                      {element[1]}
                    </D.MobileBodyMenuContent>
                  </D.MobileBodyMenuRow>
                  <a href={element[2]} className="MobileBodyMenuLink">
                    Go Page
                  </a>
                </D.MobileBodyMenu>
              ))}
            </D.MobileBody>
          </D.MobileDisplay>
        </D.MobileConatiner>
      </Mobile>
    </>
  );
}

export default App;
