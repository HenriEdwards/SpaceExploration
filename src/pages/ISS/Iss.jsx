import "./iss.css"
import {ImgLayout, ParList } from "../../components/index";
import { images, paragraphs, listItems } from "./issData";

function Iss() {

  return (
    <section className="iss">
      <ParList 
        heading="ISS Overview" 
        paragraphs={paragraphs} 
        listItems={listItems} 
      />
        <ImgLayout 
        images={images}
      />
    </section>
  )
}

export default Iss;
