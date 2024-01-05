const ActorCard = ({id,name,country,gender,birthday,deathday,image}) => {
  return (
    <div>
          <div>
             <img src={image} alt={name}/>
          </div>
          <h1>{name} {!!gender && `(${gender})`}</h1>
          <p>{country ? `Comes from ${country}`:`No country known`}</p>
          {!!birthday && <p>Born on {birthday}</p>}
          <p>{deathday ? `Died on ${deathday}`: `Alive`}</p>
    </div>
  )
}

export default ActorCard