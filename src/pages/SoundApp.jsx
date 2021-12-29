import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import { soundService } from '../services/sound.service';

import { SoundsList } from '../cmps/SoundsList.jsx'
import { ActionBtn } from '../cmps/ActionBtn'
import { InputSearch } from '../cmps/InputSearch'


export default function SoundApp() {
  const [sounds, setSound] = useState([]);
  const [diff, setDiff] = useState(0);

  const [layout, setLayout] = useState('column');
  const params = useParams();

  useEffect(() => {
    var search = (params.search) ? params.search : ''
    searchSounds(search)
    var layout = soundService.getFromStorage('layout')
    setLayout(layout)
  }, [1]);

  const searchSounds = (searchString1) => {
    soundService.search(searchString1).then((res) => {

      setSound(res);

    }).catch(error => {

      console.log(error.res)
    });;
  }

  const addSearch = (searchString) => {
    soundService.addSearch(searchString);
  }

  const changeDiff = (diffTChange) => {

    if ((diff === 0 && diffTChange === -1) || (diff === 24 && diffTChange === 1)) return
    (diffTChange === 1) ? setDiff(diff + 6) : setDiff(diff - 6);
  }

  const soundsToReview = () => {

    return sounds.slice(diff, diff + 6);
  }

  const changeLayout = (newLayout) => {
    setLayout(newLayout);
    soundService.saveLayout(newLayout)
  }

  if (!sounds) return
  return (

    <div>
      <InputSearch addSearch={addSearch} searchSounds={searchSounds} />
      <SoundsList sounds={soundsToReview()} layout={layout}></SoundsList>
      <ActionBtn changeDiff={changeDiff} changeLayout={changeLayout} diff={diff} />

    </div>
  );
}