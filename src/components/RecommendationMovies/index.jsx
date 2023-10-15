import moment from 'moment'
import { useState } from 'react'
import { useQuery } from 'react-query'

import Card from '../Card'
import NotFound from '../NotFound'
import Spinner from '../Spinner'
import { getRecommendationMovie } from '../../services/api/tmdb'

function RecommendationMovies({ id }) {
    const [listMovie, setListMovie] = useState(null)
    const title = 'Recommendation Movies'

    const listRecommendation = useQuery(
        ['dataListRecommendation', 'movies', id],
        () => getRecommendationMovie(id),
        {
            refetchOnWindowFocus: false,
            onSuccess: (data) => setListMovie(data),
            enabled: !!id,
        },
    )

    return (
        <div className="container-lg">
            <div className="row">
                <div className="col">
                    <h5 className="mb-4">{title}</h5>
                </div>
            </div>
            {listMovie && (
                <div className="row row-cols-7 row-cols-sm-2 row-cols-md-5">
                    {listMovie.map((movie) => {
                        const yearRelease = moment(movie.release_date).format('YYYY')
                        return (
                            <div key={movie.id} className="col">
                                <Card
                                    id={movie.id}
                                    name={movie.original_title}
                                    year={yearRelease}
                                    rating={movie.vote_average}
                                    poster={movie.poster_path}
                                />
                            </div>
                        )
                    })}
                </div>
            )}
            {listRecommendation.status === 'loading' && <Spinner />}
            {listRecommendation.status === 'success' && !listMovie?.length && (
                <NotFound title={title} />
            )}
        </div>
    )
}

export default RecommendationMovies
