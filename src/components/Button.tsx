import React from 'react';
import './Button.css'

export const Button = props => {
  return (
    // console.log(777, props),
    <button 
      className='Button' 
      onClick={props.onClick}
      // 这和counter button onClick是联系起来的
    >
      {props.children}
      {/* 是为了counter里面的Click123能传出来显示 */}
    </button>
  )
}