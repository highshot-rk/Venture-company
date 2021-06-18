import React from 'react';

export default function Language() {

  return (
    <div className="topbar-menu-container">
      <div className="title border">Language</div>
      <div className="language-menu-container">
        <div className="menu-column">
          <div className="first">Global</div>
          <div className="language">
            <img src="/assets/images/country/English.png" alt="country" />
            <span>English</span>
          </div>
        </div>
        <div className="menu-column">
          <div className="first">North & South America</div>
          <div className="language">
            <img src="/assets/images/country/Brazil.png" alt="country" />
            <span>Brazil (Português)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Argentina.png" alt="country" />
            <span>Argentina (Español)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Chile.png" alt="country" />
            <span>Chile (Español)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Colombia.png" alt="country" />
            <span>Colombia (Español)</span>
          </div>
        </div>
        <div className="menu-column">
          <div className="first">Euorope</div>
          <div className="language">
            <img src="/assets/images/country/France.png" alt="country" />
            <span>France (Français)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Germany.png" alt="country" />
            <span>Germany / Switzerland (Deutsch)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Italy.png" alt="country" />
            <span>Italy (Italiano)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Spain.png" alt="country" />
            <span>Spain (Español)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Russia.png" alt="country" />
            <span>Russia (Русский)</span>
          </div>
        </div>
        <div className="menu-column">
          <div className="first">Asia & Australia</div>
          <div className="language">
            <img src="/assets/images/country/China.png" alt="country" />
            <span>China (中文版)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Korea.png" alt="country" />
            <span>Korea (한국어)</span>
          </div>
          <div className="language">
            <img src="/assets/images/country/Japan.png" alt="country" />
            <span>Japan (日本語)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
