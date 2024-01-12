// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getShowById } from "../../utils/tvMazeApi";
import { useQuery } from '@tanstack/react-query'
import ShowMain from "./ShowMain";
import Details from "./Details";
import Seasons from "./Seasons";
import Cast from "./Cast";
import styled from 'styled-components';
import { TextCenter } from "../../styled_css/common/TextCenter";
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
      <ShowDetailPageWrapper>
        <BackHomeWrapper>
          <Link to={'/'}>Go Back To Home</Link>
        </BackHomeWrapper>
        <div>
          <ShowMain
            image={showDetail?.image}
            name={showDetail?.name}
            rating={showDetail?.rating}
            summary={showDetail?.summary}
            genres={showDetail?.genres}
          />
        </div>
        <InfoBlock>
          <h2>Details:</h2>
          <Details
            status={showDetail?.status}
            premiered={showDetail?.premiered}
            network={showDetail?.network}
          />
        </InfoBlock>
        <InfoBlock>
            <h2>Seasons:</h2>
            <Seasons seasons={showDetail?._embedded?.seasons}/>
        </InfoBlock>
        <InfoBlock>
          <h2>Cast:</h2>
          <Cast cast={showDetail?._embedded?.cast}/>
        </InfoBlock>
      </ShowDetailPageWrapper>
    </>)
  }
  return (
    <>
      <div>
        {
          isLoading && <TextCenter>Loading....</TextCenter>
        }
      </div>
    </>
  )
}

export default ShowDetail

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowDetailPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;