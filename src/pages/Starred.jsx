import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows"
import { getShowByIds } from "../utils/tvMazeApi";
import ShowGrid from "../components/shows/ShowGrid";
import { TextCenter } from "../styled_css/common/TextCenter";



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
      <TextCenter>Loading....</TextCenter>
    </>)
  }
  if (starredShowsError) {
    return (<>
      <TextCenter>Something Went Wrong!!!</TextCenter>
    </>)
  }
  if (starredItems?.length === 0) {
    return (<>
      <TextCenter>No item in the Starred List...</TextCenter>
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