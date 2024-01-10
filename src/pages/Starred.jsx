import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows"
import { getShowByIds } from "../utils/tvMazeApi";
import ShowGrid from "../components/shows/ShowGrid";



const Starred = () => {
  const [starredShowsListIds] = useStarredShows(); //custom hooks...
  const { data: starredItems, error: starredShowsError, isLoading: loading } = useQuery({
    queryKey: [starredShowsListIds],
    queryFn: async () => {
      const data = await getShowByIds(starredShowsListIds);
      const res = data?.map(item => {
        return { show: item }
      });
      return res;
    },
    refetchOnWindowFocus: false
  })
  if (loading) {
    return (<>
      <h2>Loading....</h2>
    </>)
  }
  if (starredShowsError) {
    return (<>
      <h2>Something Went Wrong!!!</h2>
    </>)
  }
  if (starredItems?.length === 0) {
    return (<>
      <h2>No item in the Starred List...</h2>
    </>)
  }
  return (
    <>
      {
        starredItems?.length !== 0 && <ShowGrid  shows={starredItems}/>
      }
    </>
  )
}

export default Starred