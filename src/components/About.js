import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2 style={{color: (props.mode==='dark')?'white':'black'}}>This is a React App</h2>
        </div>
    )
}
