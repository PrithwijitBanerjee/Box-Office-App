const ShowMain = ({ image, name, rating, summary, genres }) => {
    return (
        <div>
            <div>
                <img src={image ? image?.original : '/box-office-img-placeholder.png'} alt="..." />
            </div>
            <h1>{name}</h1>
            <div>
                <span>rating: {!!rating && (rating.average || 'N/A')}</span>
            </div>
            <p dangerouslySetInnerHTML={{__html:summary}}/>
            <div>
                genrics:

                {
                    !!genres &&  genres?.map(movieType =>(
                        <span key={movieType}> {movieType} </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowMain