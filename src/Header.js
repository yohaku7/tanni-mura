import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/score-form">点数入力</Link>
      </nav>
    </>
  );
}

export default Header;
