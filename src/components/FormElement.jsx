import React from 'react'
import CustomRadio from '../styled_css/CustomRadio'
import { RadiosWrapper, SearchButtonWrapper, SearchInput } from '../styled_css/SearchForm'

const FormElement = ({ handleFormSubmit, handleSearchInput, searchStr, statusRes, handleSelection }) => {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <SearchInput type="text" placeholder='Search Your Query Here' onChange={handleSearchInput} value={searchStr} />
        <RadiosWrapper>
          <CustomRadio htmlFor="movieSel">
            Movie
            <input type="radio" name="choice" id="movieSel" checked={statusRes === "shows"} value="shows" onChange={handleSelection} />
            <span />
          </CustomRadio>
          <CustomRadio htmlFor="actorSel">
            Actor
            <input type="radio" name="choice" id="actorSel" value="people" checked={statusRes === "people"} onChange={handleSelection} />
            <span />
          </CustomRadio>
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">Submit Query</button>
        </SearchButtonWrapper>
      </form>
    </>
  )
}

export default FormElement