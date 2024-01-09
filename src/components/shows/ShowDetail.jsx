// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getShowById } from "../../utils/tvMazeApi";
import { useQuery } from '@tanstack/react-query'
import ShowMain from "./ShowMain";
import Details from "./Details";
import Seasons from "./Seasons";
import Cast from "./Cast";

// const useShowById = (showId) => { //custom hooks...
//   const [showDetail, setShowDetail] = useState({});
//   const [fetchErr, setFetchErr] = useState(null);
//   useEffect(()=>{
//     console.log("After first render");
//     const getParticularShowById = async showId =>{
//         try{
//           setFetchErr(null);
//           const data = await getShowById(showId);
//           setShowDetail(data);
//         }catch(err)
//         {
//           setFetchErr(err);
//         }    
//     }
//     getParticularShowById(showId);

//     return () => { // clean up function ...
//       setShowDetail({});
//     }
//   },[showId]); 

//   return {showDetail,fetchErr};
// }

const ShowDetail = () => {
  const { showId } = useParams();
  // const {showDetail,fetchErr} = useShowById(showId);

  //useQuery is an abstract custom hooks...
  const { error: fetchErr, data: showDetail, isLoading } = useQuery({
    queryKey: ['showId', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });


  if (fetchErr) {
    return (<>
      <div>{fetchErr?.message}</div>
    </>)
  }
  if (showDetail) {
    return (<>
      <div>
        <div>
          <Link to={'/'}>Go Back To Home</Link>
        </div>
        <div>
          <ShowMain
            image={showDetail?.image}
            name={showDetail?.name}
            rating={showDetail?.rating}
            summary={showDetail?.summary}
            genres={showDetail?.genres}
          />
        </div>
        <div>
          <h2>Details:</h2>
          <Details
            status={showDetail?.status}
            premiered={showDetail?.premiered}
            network={showDetail?.network}
          />
        </div>
        <div>
            <h2>Seasons:</h2>
            <Seasons seasons={showDetail?._embedded?.seasons}/>
        </div>
        <div>
          <h2>Cast:</h2>
          <Cast cast={showDetail?._embedded?.cast}/>
        </div>
      </div>
    </>)
  }
  return (
    <>
      <div>
        {
          isLoading && <h2>Loading....</h2>
        }
      </div>
    </>
  )
}

export default ShowDetail