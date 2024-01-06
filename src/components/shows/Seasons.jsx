const Seasons = ({ seasons }) => {
    return (
        <>
            <p>Seasons in total: {seasons?.length}</p>
            <p>Episodes in total: {seasons?.reduce((sum, season) => sum + season.episodeOrder, 0)}</p>
            <div>
                {
                    seasons?.map(item => (
                        <div key={item?.id}>
                            <div>
                                <p>Season {item?.number}</p>
                                <p>Episodes: {item?.episodeOrder}</p>
                            </div>
                            <div>
                                Aired: {' '}
                                <strong>
                                    {item?.premiereDate} - {item?.endDate}
                                </strong>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Seasons