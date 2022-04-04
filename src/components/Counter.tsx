import React from 'react'

import { Button } from './Button.tsx'

export const Counter = props => {
    // console.log(props)
    const [clicks, setClicks] = React.useState(0);
    const handleClick = () => setClicks(clicks + 1);
    const { text } = props;

    return (
        <div>
            {text}:{clicks}
            {/* 这个clicks 就是hooks里面定义的0 */}
            <Button onClick={handleClick}>Click</Button>
        </div>
    )
}