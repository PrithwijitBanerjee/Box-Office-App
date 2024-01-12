import { SearchCard, SearchImgWrapper } from "../../styled_css/common/SearchCard"

const ActorCard = ({id,name,country,gender,birthday,deathday,image}) => {
  return (
    <SearchCard>
          <SearchImgWrapper>
             <img src={image} alt={name}/>
          </SearchImgWrapper>
          <h1>{name} {!!gender && `(${gender})`}</h1>
          <p>{country ? `Comes from ${country}`:`No country known`}</p>
          {!!birthday && <p>Born on {birthday}</p>}
          <p>{deathday ? `Died on ${deathday}`: `Alive`}</p>
    </SearchCard>
  )
}

export default ActorCard