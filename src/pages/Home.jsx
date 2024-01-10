import { useState } from "react"
import { getPeopleRes, getShowsRes } from "../utils/tvMazeApi";
import FormElement from "../components/FormElement";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";
import {useQuery} from "@tanstack/react-query"
import { useSearchStr } from "../lib/useSearchStr";
const Home = () => {
  const [filter, setFilter] = useState({})

  const { data:apiRes, error:apiErr,isLoading } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => filter?.statusRes ? getShowsRes(filter.q) : getPeopleRes(filter.q),
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter.q || !!filter.statusRes,
      refetchOnWindowFocus: false
  })
  // const [searchStr, setSearchStr] = useState('');
     const [searchStr, setSearchStr] = useSearchStr(); //custom hooks... 
  // const [apiRes, setApiRes] = useState(null);

  const [statusRes, setStatusRes] = useState('shows');
  // const [apiErr, setApiErr] = useState('');

  const handleSearchInput = e => {
    setSearchStr(e.target.value);
  }
  const handleFormSubmit = async e => {
    e.preventDefault();
    // try {
    //   setApiErr('');
    //   if (statusRes === "shows") {
    //     const res = await getShowsRes(searchStr);
    //     setApiRes(res);
    //   } else {
    //     const res = await getPeopleRes(searchStr);
    //     setApiRes(res);
    //   }
    // } catch (error) {
    //   setApiErr(error?.message);
    // }
    setFilter({q:searchStr,statusRes});
  }

  const handleSelection = e => {
    setStatusRes(e.target.value);
  }

  const RenderApiRes = () => { // Nested Component inside parent component...
    if(isLoading)
    {
      return <>
          <div>loading...</div>
      </>
    }
    if (apiRes && apiRes?.length === 0) {
      return <>
        <div>
          <h3>...No Results Found...</h3>
        </div>
      </>
    }
    return <>
      {
        apiRes && apiRes[0]?.show ? <ShowGrid shows={apiRes}/> : <ActorGrid actors={apiRes}/>
      }
    </>
  }

  return (
    <>
      <FormElement
        handleFormSubmit={handleFormSubmit}
        searchStr={searchStr}
        handleSearchInput={handleSearchInput}
        statusRes={statusRes}
        handleSelection={handleSelection}
      />
      <div>
        {
          apiErr ? apiErr : <RenderApiRes />
        }
      </div>
    </>
  )
}

export default Home