import './starship.css'
import {ImgLayout, ParList } from '../../components/index';
import { images, paragraphs, listItems } from './starshipData.js';

function Starship() {

  return (
    <section className='starship'>
      <ParList 
        heading="Starship Overview" 
        paragraphs={paragraphs} 
        listItems={listItems} 
      />
        <ImgLayout 
        images={images}
      />
    </section>
  )
}

export default Starship;
