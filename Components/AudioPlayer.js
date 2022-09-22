import React, { useEffect, useRef } from 'react'
import Styles from '../styles/SliderAudio.module.css'

export default function AudioPlayer({ props, setPlay }) {

  return (
    <>
      <audio className={Styles.audioBar} src={`assets/music/${props.src}`} controls onPause={() => setPlay(false)} onPlay={() => setPlay(true)} autoPlay></audio>
    </>
  )
}
