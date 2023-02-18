const express = require('express')
const router = express.Router()


const {
    getSearchMovie,
    getSelectedMovie
} = require('../controller/movieController')

router.get('/search/:movieQuery', getSearchMovie) //Search movie
router.get('/details/:movieID', getSelectedMovie) //Selected Movie


module.exports = router