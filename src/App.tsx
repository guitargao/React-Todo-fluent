import React from 'react';

import { Counter } from './components/Counter.tsx';

export const App = props => {
  return (
    // console.log(props),
    <div>
      <Counter text="chickens" />
      <Counter text="ducks" />
      
    </div>
  )
}
