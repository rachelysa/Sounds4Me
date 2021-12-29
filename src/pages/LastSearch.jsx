import { useEffect, useState } from "react";

import { NavLink } from 'react-router-dom';

import { soundService } from "../services/sound.service";


export default function LastSearch() {
  const [prevSearch, setPrevSearch] = useState([]);

  useEffect(() => {
    var prev = soundService.getFromStorage('prevSearch');

    setPrevSearch(prev);

  }, [1]);

  return (
    <div className="last-search">
      <h2 className="h2-title">Your 5 last searches:</h2>
      {prevSearch.map((item, index) => {
        var url = '/home/' + item;
        return <NavLink activeClassName="active-nav" key={index} exact to={url}>
          {item}
        </NavLink>
      })}</div>)
}
