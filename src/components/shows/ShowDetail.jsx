// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getShowById } from "../../utils/tvMazeApi";
import { useQuery } from '@tanstack/react-query'

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
  const {showId} = useParams(); 
  // const {showDetail,fetchErr} = useShowById(showId);

  //useQuery is an abstract custom hooks...
  const {error:fetchErr, data:showDetail,isLoading} = useQuery({
    queryKey:['showId',showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  
  if(fetchErr)
  {
    return (<>
      <div>{fetchErr?.message}</div>
    </>)
  }
  if(showDetail)
  {
    return (<>
        <div>
            <div>
                <img src={showDetail?.image && showDetail?.image?.medium} alt={showDetail?.name}/>
            </div>
            <h1>{showDetail?.name}</h1>
            <h6>Ratings: {showDetail?.rating ? showDetail?.rating?.average : null}</h6>
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