import { ICareer } from '../../../types'
import * as React from 'react'
import CareerImage from './CareerImage/CareerImage'

import './Career.css'

interface ICareerProps {
  career: ICareer,
  showImage: boolean,
  onSaveBookmark: (career: ICareer) => void
}

function onSaveBookmarkFactory (props: ICareerProps) {
  return () => props.onSaveBookmark(props.career)
}

function Career (props: ICareerProps): JSX.Element {
  return (
    <div className="Career__wrapper">
      {props.showImage ? (
        <CareerImage image={props.career.image} />
      ) : undefined}
      <h1>
        <div className="Career__titleContainer">{props.career.title}</div>
        <div className="Career__bookmarkButton" onClick={onSaveBookmarkFactory(props)}>
          <svg width="50" viewBox="0 -256 1792 1792">
            <path
              transform="matrix(1,0,0,-1,258.16949,1270.2373)"
              d="m 1164,1408 q 23,0 44,-9 33,-13 52.5,-41 19.5,-28 19.5,-62 V 7 q 0,-34 -19.5,-62 -19.5,-28 -52.5,-41 -19,-8 -44,-8 -48,0 -83,32 L 640,352 199,-72 q -36,-33 -83,-33 -23,0 -44,9 Q 39,-83 19.5,-55 0,-27 0,7 v 1289 q 0,34 19.5,62 19.5,28 52.5,41 21,9 44,9 h 1048 z"
              fill="#FFFFFF" />
          </svg>
        </div>
      </h1>
      <p>{props.career.description}</p>
      <ul>
        {props.career.notes.map((note) => (
          <li key={note}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Career