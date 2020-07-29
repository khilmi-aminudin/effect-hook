import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick,setidFromButtonClick] = useState(1)

    const handleClick = () => {
        setidFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[idFromButtonClick])
    return (
        <div>
            <input
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button 
                type='button'
                onClick={handleClick}>
                Fetch Posts
            </button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
