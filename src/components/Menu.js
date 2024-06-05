import React from 'react';
import { menuData } from '../menuData';
import MenuCategory from './MenuCategory';

const Menu = () => {
  return (
    <div className="menu">
      {menuData.map((category, index) => (
        <MenuCategory key={index} category={category} />
      ))}
    </div>
  );
};

export default Menu;
