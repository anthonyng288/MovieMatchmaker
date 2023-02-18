require('dotenv').config()
const axios = require('axios')

const getSearchMovie = (req, res) => {
    let searchQuery = req.params.movieQuery
    let searchMovieEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbObject.api_key}&language=en-US&query=${searchQuery}&page=1&include_adult=${tmdbObject.adultFiler}`

    try {
        axios.get(searchMovieEndpoint)
            .then(response => {
                const {data} = response;
                const allMovies = data.results;
                if(allMovies.length < 1){
                    return res.status(200).json({error: 'Sorry no movies with this name'})
                }
                return res.status(200).json(allMovies)
            })
    }
    catch(error){
        res.status(404).json({error: 'Something went wrong, try again later'})
    }

}

const getSelectedMovie = (req,res) => {
    //This is the selectedMovieRoute

    let movieID = req.params.movieID

    let selectedMovieEndpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${tmdbObject.api_key}&language=en-US`
    console.log(selectedMovieEndpoint)

    try{
        axios.get(selectedMovieEndpoint)
            .then(response => {
                const {data} = response;
                const movieDetails = data.results;
                console.log(response);

                res.status(200).json(response)

            })
    }
    catch(error){
        res.status(404).json({error: 'Something went wrong, try again later'})
    }
}


const tmdbObject = {
    api_key: process.env.TMDB_API_KEY,
    page:1,
    region:'AU',
    adultFiler: true
}

module.exports = {
    getSearchMovie,
    getSelectedMovie
}

