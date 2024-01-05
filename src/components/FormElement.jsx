import React from 'react'

const FormElement = ({ handleFormSubmit, handleSearchInput, searchStr, statusRes, handleSelection }) => {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleSearchInput} value={searchStr} />
        <label htmlFor="movieSel">
          Movie
        </label>
        <input type="radio" name="choice" id="movieSel" checked={statusRes === "shows"} value="shows" onChange={handleSelection} />
        <label htmlFor="actorSel">
          Actor
        </label>
        <input type="radio" name="choice" id="actorSel" value="people" checked={statusRes === "people"} onChange={handleSelection} />
        <button type="submit">Submit Query</button>
      </form>
    </>
  )
}

export default FormElement