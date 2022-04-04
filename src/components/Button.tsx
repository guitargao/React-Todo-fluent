import React from 'react';
import './Button.css'

export const Button = props => {
  return (
    // console.log(props),
    <button className='Button' onClick={props.onClick}>
      {props.children}
      {/* 这个是一个什么东西 */}
    </button>
  )
}