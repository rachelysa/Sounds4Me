import React from "react";



export function SoundPreview({ name, img, i, moveFor }) {

    return (<button className='sound-preview' onClick={() => moveFor(i)}>

        <img src={img} alt="" />
        <p className="title">{name}</p>

    </button >)

}
