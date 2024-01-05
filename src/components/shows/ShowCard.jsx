import { Link } from "react-router-dom"

const ShowCard = ({ id, name, summary, image }) => {
  const summaryGrid = summary ?
    summary.split(' ').slice(0, 11).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No Summary';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryGrid}</p>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  )
}

export default ShowCard