import React from "react";
import styles from '../../styles/background.module.css'
// import '../styles/background.module.css'


export default function Background() {
  const headline1 =
    "RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT";
  const headline2 =
    "ALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT";
  const headline3 = "IT RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT RAVALBIT";
  return (
    <div className="h-full w-full overflow-hidden absolute top-0 left-0 flex flex-col justify-end">
      <h1 className={`text-[30vh] whitespace-nowrap leading-[90%] ${styles.isKO_Marcellus_SC_1}`}>
        {headline1}
      </h1>
      <h1 className={`text-[30vh] whitespace-nowrap leading-[90%] ${styles.isKO_Marcellus_SC_2}`}>
        {headline2}
      </h1>
      <h1 className={`text-[30vh] whitespace-nowrap leading-[90%] ${styles.isKO_Marcellus_SC_3}`}>
        {headline3}
      </h1>
    </div>
  );
}
