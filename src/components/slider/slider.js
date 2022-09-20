import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";
import { S1, S2, S3, S4, S5 } from 'assets';
export default function Slider() {
    return (
        <ImageSlider localImg="true"
            data={[{ img: S1 }, { img: S2 }, { img: S3 }, { img: S4 }, { img: S5 }]}
            autoPlay={true}
            showIndicator={false}
            preview={false}
            caroselImageStyle={{ height: 145, resizeMode: "center" }}
            timer={3500}
        />
    )
}