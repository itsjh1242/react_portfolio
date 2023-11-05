import React from 'react';
// Media Query
import { Desktop, Mobile } from './MediaQuery';
import * as D from './styles/MainStyle';

// Import Config
import * as S from './config';

function App() {
  return (
    <>
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
          </D.DesktopDisplay>
        </D.DesktopContainer>
      </Desktop>
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
          </D.MobileDisplay>
        </D.MobileConatiner>
      </Mobile>
    </>
  );
}

export default App;
