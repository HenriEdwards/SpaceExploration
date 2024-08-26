import './iss.css'
import {ImagesLayout, ParagraphList } from '../../components/index';

function Iss() {

  const images = [
    { src: 'src/assets/iss1.jpg', alt: 'iss'},
    { src: 'src/assets/iss2.jpg', alt: 'iss'},
    { src: 'src/assets/iss3.jpg', alt: 'iss'},
    { src: 'src/assets/iss4.jpg', alt: 'iss'},
    { src: 'src/assets/iss5.jpg', alt: 'iss'},
    { src: 'src/assets/iss1.jpg', alt: 'iss'},
    { src: 'src/assets/iss2.jpg', alt: 'iss'},
    { src: 'src/assets/iss3.jpg', alt: 'iss'},
    { src: 'src/assets/iss4.jpg', alt: 'iss'},
    { src: 'src/assets/iss5.jpg', alt: 'iss'}
  ]

  const credit = ["NASA"]

  const paragraphs = [
    "The International Space Station (ISS) is a space-based laboratory that orbits Earth, enabling research in a microgravity environment. It is a collaborative effort between NASA, Roscosmos, ESA, JAXA, and CSA, and has been continuously inhabited since 2000, supporting experiments that advance our understanding of space and Earth.",
    "The future of the ISS involves extending its mission until at least 2030, with plans to transition its functions to commercial space stations. This shift will allow NASA and other agencies to focus on deeper space exploration, like missions to Mars, while private companies take over low Earth orbit operations."
  ];

  const listItems = [
    "The ISS orbits Earth at 420 kilometers (260 miles) above and travels at 28,000 kilometers (17,500 miles) per hour, completing an orbit every 90 minutes.",
    "The ISS is a major international project involving 15 countries and five space agencies: NASA, Roscosmos, ESA, JAXA, and CSA.",
    "The ISS allows for microgravity research, enabling experiments that lead to breakthroughs in medicine, materials science, and physics.",
    "The ISS is as large as a football field and weighs about 420,000 kilograms (925,000 pounds), making it the biggest human-made structure in space.",
    "The ISS recycles 93% of its water, including moisture from breath, sweat, urine, and wastewater, making it highly efficient."
  ];

  return (
    <section className='iss' id='iss'>
      <div className='iss-container'>
        <ParagraphList 
          heading="ISS OVERVIEW" 
          paragraphs={paragraphs} 
          listItems={listItems} 
        />
          <ImagesLayout 
          images={images}
          credit={credit}
        />
      </div>
    </section>
  )
}

export default Iss;
