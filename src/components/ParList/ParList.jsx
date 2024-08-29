import "./parlist.css"

export default function ParList({paragraphs, heading, listItems}) {

  return (
    <div className="parlist-layout">
      <div className="parlist-container">
        <div className="parlist-par-container">
          <h2 className="parlist-par-heading">{heading}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="parlist-par">{paragraph}</p>
          ))}
        </div>
        <ul className="parlist-list">
          {listItems.map((item, index) => (
            <li key={index} className="parlist-list-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
