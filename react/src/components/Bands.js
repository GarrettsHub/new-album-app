import { useState, useEffect } from "react"
import axios from 'axios'
import Card from "./Card"

const Bands =()=> {

    const [ bands, setBands ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/band')
            .then(res => {
                setBands(res.data)
            })
    }, [])

    const bandCards = bands.map(band => {
        return <Card
            key={band.band_id}
            id={band.band_id}
            name={band.band}
            imgUrl={band.band_pic}
        />
    })

    return(
        <main className="main" id="mainHome">
            <div className="container">
                <div className="row">
                    <h2>bands</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        { bandCards }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Bands