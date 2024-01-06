const Cast = ({ cast }) => {
    return (
        <>
            <div>
                {
                    !!cast && cast?.map(({ person, character, voice }) => (
                        <div key={person?.id}>
                            <div>
                                <img src={person?.image ? person?.image?.medium : '/box-office-img-placeholder.png'} alt="..." />
                            </div>
                            <div>
                                {person?.name} | {character?.name}  {voice && '|Voiceover'}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cast