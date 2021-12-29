
import React, { useState } from "react";

import { SoundPreview } from './SoundPreview.jsx';
import { SoundDetails } from "../pages/soundDetails.jsx";

export function SoundsList({ sounds, layout }) {
  const [isList, setIsList] = useState(true);
  const [item, setItem] = useState(true);

  const moveFor = (item) => {
    setItem(item)
    setIsList(!isList)
  }
  
  return (
    <div className="sounds-list" >
      {
        (isList) ?

          <div className={layout}>
            {
              sounds.map(function (item, index) {
                return <SoundPreview name={item.title} moveFor={moveFor} img={item.img.url} key={index} i={index} />

              })
            }
          </div> :
          <SoundDetails moveFor={moveFor} item={item} />
      }
    </div>

  )
}
