import React from "react";
import Image from "next/image";
import Styles from '../styles/Vinyle.module.css'

export default function Vinyle({ props }) {
  return (
    <>
      <div className={Styles.div}>
        <div className={Styles.test}>
          <div className={Styles.vinyle}>
            <Image src="/assets/Images/vinyle.png" alt="vinyle" width={200} height={200}></Image>
            <div className={Styles.vinyle_cover}>
              <Image className={Styles.img_vinyle} src={props.img} alt='' height={100} width={100}></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}