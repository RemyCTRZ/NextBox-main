import React, { useEffect, useRef } from 'react'
import Styles from '../styles/SliderAudio.module.css'

export default function AudioPlayer({ props }) {

  return (
    <>
      <audio className={Styles.audioBar} src={`assets/music/${props.src}`} controls></audio>
      <p className={Styles.pTitle}>{props.title}.mp3</p>
    </>
  )
}
