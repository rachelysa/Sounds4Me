import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import React, { useEffect, useRef, useState } from "react";


import { Animated, StyleSheet } from "react-native";

import { soundService } from "../services/sound.service";


const styles = StyleSheet.create({

    fadingContainer: {
        minHeight: '550px',
        padding: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"

    },


});
export function SoundDetails({ item, moveFor }) {

    const [currItemUrl, setCurrItemUrl] = useState(0);
    const [currItemTitle, setCurrItemTitle] = useState(0);


    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        var currItem = soundService.getFromStorage('currSearch')[item];

        setCurrItemUrl(`https://www.youtube.com/embed/${currItem.id}?controls=0`)
        setCurrItemTitle(currItem.title)
        fadeIn()
    }, [1])

    const fadeIn = () => {

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    };

    return (<Animated.View
        style={[
            styles.fadingContainer,
            {

                opacity: fadeAnim
            }
        ]}

    >
        <Tooltip title="go back" arrow>
            <Button onClick={() => { moveFor() }}><ArrowBackIcon /> </Button>
        </Tooltip>
        {currItemUrl ? (<div className="sound-play">
            <h2 className="sound-play-title">{currItemTitle}</h2>
            <iframe className="sound-play-video" src={currItemUrl} frameBorder="0"></iframe>
        </div>) : <div>loading</div>}



    </Animated.View>)

}
