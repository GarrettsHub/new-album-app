const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3005

const tables = ['album', 'artist','band', 'label', 'genre' ]

// root route => localhost:3000/api
router.get('/api', (req, res)=> {
    res.json({
        'Albums': `http://localhost:${PORT}/api/album`,
        'Artists': `http://localhost:${PORT}/api/artist`,
        'Bands': `http://localhost:${PORT}/api/band`,
        'Labels': `http://localhost:${PORT}/api/label`,
        'Genres': `http://localhost:${PORT}/api/genre`
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

module.exports = router