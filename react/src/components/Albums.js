import { useState, useEffect } from 'react'
import axios from 'axios'

const Albums =()=> {

    const [ albums, setAlbums ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/album')
            .then(res =>{
                setAlbums(res.data)
            })
    }, [])

    console.log(albums)

    return(
        <main className="main" id="mainHome">
            <div className="container">
                <div className="row">
                    <h2>albums</h2>
                </div>
            </div>
        </main>
    )
}

export default Albums