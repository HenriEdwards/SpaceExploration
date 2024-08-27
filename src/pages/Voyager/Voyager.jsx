import './voyager.css'
import { images, paragraphs, listItems } from './voyagerData';
import { ImgLayout, ParList } from '../../components/index';

function Voyager() {
                      
  return (
    <section className='voyager'>
      <ParList 
        heading="Voyager Overview" 
        paragraphs={paragraphs} 
        listItems={listItems} 
      />
        <ImgLayout 
        images={images}
        page={"voyager"}
      />
    </section>
  )
}

export default Voyager;
