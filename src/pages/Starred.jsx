import { useStarredShows } from "../lib/useStarredShows"

const Starred = () => {
  const [starredShowsList] = useStarredShows(); //custom hooks...
  return (
        <>
            <h1>Starred Page, total starred shows: {starredShowsList?.length}</h1>
        </>
  )
}

export default Starred