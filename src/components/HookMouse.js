import React,{useEffect,useState} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect( () => {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <div>
            <h1>X : {x} Y : {y}</h1>
        </div>
    )
}

export default HookMouse
