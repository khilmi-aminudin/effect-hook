import React, {useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    // useEffect(() => {
    //     console.log(name+count)
    //     document.title = `You Clicked ${count} times`
    // })

    useEffect(() => {
        console.log(name+count)
        document.title = `You Clicked ${count} times`
    },[count])
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={ e => setName(e.target.value)}
            /><br/>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Click {count} times
            </button>
            <h1>
                {name}
            </h1>
        </div>
    )
}

export default HookCounterOne
