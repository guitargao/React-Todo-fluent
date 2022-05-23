import React from 'react'

import { Button } from './Button.tsx'

export const Counter = props => {
    console.log(666, props)
    const [clicks, setClicks] = React.useState(0);
    const handleClick = () => setClicks(clicks + 1);
    const { text } = props;
    //上面的这个定义可以写成{props.text}，这个应该上就是把父组件定义的text传递到子组件中来

    return (
        <div>
            {text}:{clicks}
            {/* {props.text}:{clicks} */}
            {/* 这一步写成这样好理解一些 */}
            {/* 这个clicks 就是hooks里面定义的0 */}
            <Button onClick={handleClick}>Click123</Button>
        </div>
    )
}