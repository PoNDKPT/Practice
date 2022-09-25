import React from 'react';

const DarkMode = ({ toggle, setToggle }: any) => {
  const triggerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      onClick={triggerToggle}
      className={`toggle ${toggle ? 'toggle--checked' : ''}`}
    >
      <div className="toggle-container">
        <div className="toggle-check">
          <span>🌜</span>
        </div>
        <div className="toggle-uncheck">
          <span>🌞</span>
        </div>
      </div>
      <div className="toggle-circle"></div>
      <input
        className="toggle-input"
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
};

export default DarkMode;
