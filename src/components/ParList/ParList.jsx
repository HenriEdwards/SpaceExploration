import './parlist.css'

export default function ParList({paragraphs, heading, listItems}) {

  return (
    <div className='paragraph-container'>
      <div className="paragraph-list">
        <div className="paragraph-list__paragraphs">
          <h2 className="paragraph-list__heading">{heading}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="paragraph-list__paragraph">{paragraph}</p>
          ))}
        </div>
        <ul className="paragraph-list__list">
          {listItems.map((item, index) => (
            <li key={index} className="paragraph-list__list-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
