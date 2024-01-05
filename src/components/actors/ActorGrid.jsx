import ActorCard from './ActorCard'
const ActorGrid = ({actors}) => {
  return (
        <>
            {
                actors && actors?.map(item =>(
                    <ActorCard 
                    key={item?.person?.id}
                    name={item?.person?.name}    
                    country={item?.person?.country ? item.person.country.name : null}
                    birthday={item?.person?.birthday}
                    deathday={item?.person?.deathday}
                    gender={item.person.gender}
                    id={item?.person?.id}
                    image= {item?.person?.image ? item.person.image.medium : '/box-office-img-placeholder.png'}
                    />
                ))
            }
        </>
  )
}

export default ActorGrid