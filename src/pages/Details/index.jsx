import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import Actors from '../../components/Actors'
import PosterMovie from '../../components/PosterMovie'
import RecommendationMovies from '../../components/RecommendationMovies'
import ReviewMovies from '../../components/ReviewsMovies'
import { getDetailMovie } from '../../services/api/tmdb'

function PagesDetails() {
    const { id } = useParams()
    const [detailMovie, setDetailMovie] = useState(null)

    useQuery(['dataDetailMovie', 'movies', id], () => getDetailMovie(id), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setDetailMovie(data),
        enabled: !!id,
    })

    return (
        <>
            <PosterMovie data={detailMovie} />
            <ReviewMovies id={id} />
            <Actors id={id} />
            <RecommendationMovies id={id} />
        </>
    )
}

export default PagesDetails
