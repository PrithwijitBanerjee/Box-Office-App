const ShowCard = ({ id, name, summary, image,onStar,isStarred}) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read More</a>
        <button type="button" onClick={() => onStar(id)}>
            {
              isStarred ? 'Unstar Me' : 'Star Me'
            }
        </button>
      </div>
    </div>
  )
}

export default ShowCard