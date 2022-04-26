import React from 'react';
import { SubHeading } from '../../components'
import { data, images } from '../../constants'
import './Laurels.css';

const AwardCard = ({award: { title, imgUrl, subtitle }}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='awards' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper__info'>
      <SubHeading title='Awards & recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {
          data.awards.map(award => <AwardCard key={award.title} award={award} />)
        }
      </div>
    </div>
    <div className='app__wrapper__img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;