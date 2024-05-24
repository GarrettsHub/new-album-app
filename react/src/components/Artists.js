import { useState, useEffect } from 'react'
import  axios  from 'axios'
import Card from './Card'

const Artists =()=> {

    const [ artists, setArtists ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3005/api/artist`)
            .then(res => {
                setArtists(res.data)
            })
    }, [])

    console.log(artists)

    const artistCards = artists.map(artist => {

        let artistName = artist.alias === null ? `${artist.fName} ${artist.lName}` : artist.alias

        return <Card
                    key={artist.artist_id}
                    id={artist.artsit_id}
                    name={artistName}
                    imgUrl={artist.artist_pic}
            />
    })

    return(
        <main className="main" id="mainHome">
            <div className="container">
                <div className="row">
                    <h2>artists</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {artistCards}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Artists