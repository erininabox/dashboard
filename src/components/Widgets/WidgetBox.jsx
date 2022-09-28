import IonIcon from "@reacticons/ionicons"
import React from "react"
import styles from './WidgetBox.module.css';

const WidgetBox = (props) => {
  const title = props.title;
  const stat = props.stat;
  const startCoor = props.startCoor;
  const endCoor = props.endCoor;

    let styleString = "shadow-2xl w-64 h-56 flex border-2 border-primary-500 p-3 m-3 rounded-lg";

    let rStart = styles["grid_row__start" + startCoor[0].toString()];
    let cStart = styles["grid_column__start" + startCoor[1].toString()];
    let rEnd = styles["grid_row__end" + endCoor[0].toString()];
    let cEnd = styles["grid_column__end" + endCoor[1].toString()];

    styleString = styleString + " " + rStart + " " + rEnd + " " + cStart + " " +cEnd;

  return (
    <div className={`${styleString}`}>
      <IonIcon name="alert-circle-outline" className="float-left p-2" size="large" />
      <div className="p-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{stat}</p>
      </div>
    </div>
  )
}

export default WidgetBox 