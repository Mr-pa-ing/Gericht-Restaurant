import React from 'react';
import { SubHeading, MenuItem } from '../../components'
import { data, images } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu That Fits Your Palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <h1 className='app__specialMenu-menu_heading'>Wine & Beer</h1>
        <div className='app__specialMenu-menu_items'>
            {
              data.wines.map((wine, index) => (
                <MenuItem key={wine + index} title={wine.title} price={wine.price} tag={wine.tags} />
              ))
            }
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu image' />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <h1 className='app__specialMenu-menu_heading'>Cocktails</h1>
        <div className='app__specialMenu-menu_items'>
            {
              data.cocktails.map((cocktail, index) => (
                <MenuItem key={cocktail + index} title={cocktail.title} price={cocktail.price} tag={cocktail.tags} />
              ))
            }
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
