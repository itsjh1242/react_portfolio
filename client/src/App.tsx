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
              <p className="NameF">{S.MainPageConfig.SubTitleF}</p>
              <p className="NameS">{S.MainPageConfig.SubTitleS}</p>
            </D.DesktopHead>
          </D.DesktopDisplay>
        </D.DesktopContainer>
      </Desktop>
      <Mobile>
        <D.MobileConatiner>
          <D.MobileDisplay>
            <D.MobileHead>
              <h1 className="Title">{S.MainPageConfig.Title}</h1>
              <p className="NameF">{S.MainPageConfig.SubTitleF}</p>
              <p className="NameS">{S.MainPageConfig.SubTitleS}</p>
            </D.MobileHead>
          </D.MobileDisplay>
        </D.MobileConatiner>
      </Mobile>
    </>
  );
}

export default App;
