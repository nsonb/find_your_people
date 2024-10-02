import { useState } from 'react';

const Header = () => {
  const [adjustedHeight, setAdjustedHeight] = useState('100vh');
  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'Bebas Neue',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 100,
        height: adjustedHeight,
        width: '100vw',
        backgroundColor: 'gold',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        transition: 'ease',
        transitionDuration: '0.1s',
        cursor: 'pointer',
      }}
      onClick={() => {
        setAdjustedHeight('15vh');
      }}
    >
      Find your People
    </div>
  );
};

export default Header;

// font-family: "Rubik Mono One", monospace;
//   font-weight: 400;
//   font-style: normal;
