import "./starlink.css"
import {ImgLayout, ParList } from "../../components/index";
import { images, paragraphs, listItems } from "./starlinkData.js";

function Starlink() {

  return (
    <section className="starlink">
      <ParList 
        heading="Starlink Overview" 
        paragraphs={paragraphs} 
        listItems={listItems} 
      />
        <ImgLayout 
        images={images}
        page={"alternate"}
      />
    </section>
  )
}

export default Starlink;
