import React from 'react';

import { Counter } from './components/Counter.tsx';

export const App = props => {
  return (
    // console.log(props),上面的那个props的参数好像不写也可以
    <div>
      <Counter text="chickens" />
      <Counter text="ducks" />
    </div>
  )
}
