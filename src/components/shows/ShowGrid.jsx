import ShowCard from "./ShowCard"

const ShowGrid = ({shows}) => {
  return (
    <>
        {
            shows && shows?.map(item => (
                <ShowCard 
                key={item?.show?.id} 
                name={item?.show?.name} 
                summary={item?.show?.summary} 
                image={item?.show?.image ? item.show.image.medium : '/box-office-img-placeholder.png'}
                id={item?.show?.id}    
                />
            ))
        }
    </>
  )
}

export default ShowGrid