import React from 'react'

const Filter = (props) => {
    return (
<nav className="navbar navbar-light bg-dark justify-content-between">
  <a href='topOfThePage' className="navbar-brand">MOVIE WORLD</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" value={props.value} onChange={(event)=> props.setSearchValue(event.target.value)} placeholder="Type to search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    )
}

export default Filter
