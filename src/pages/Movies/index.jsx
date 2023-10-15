import moment from 'moment'
import { useState } from 'react'
import { useQuery } from 'react-query'

import Card from '../../components/Card'
import SelectSortBy from '../../components/Select/SelectSortBy'
import Spinner from '../../components/Spinner'
import { getListPopular, getListRating, getListUpcoming } from '../../services/api/tmdb'

function PagesMovies() {
    const [listMovies, setListMovies] = useState(null)
    const [sortBy, setSortBy] = useState('popularasc')

    useQuery(['dataListMovies', 'movies'], () => getListPopular(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: sortBy === 'popularasc' || sortBy === 'populalrdesc',
    })

    useQuery(['dataListMovies', 'movies'], () => getListUpcoming(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: sortBy === 'releasedateasc' || sortBy === 'releasedatedesc',
    })

    useQuery(['dataListMovies', 'movies'], () => getListRating(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: sortBy === 'ratingasc' || sortBy === 'ratingdesc',
    })

    const handleSortBy = (value) => {
        setSortBy(value)
    }

    return (
        <div className="container-lg mt-4">
            <div className="row">
                <div className="col">
                    <h4 className="mb-4">Movies</h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3 col-sm-12">
                    <h6>Sort Result By</h6>
                    <div className="row my-4">
                        <SelectSortBy onChange={handleSortBy} />
                    </div>
                </div>
                <div className="col-md-9 com-sm-12">
                    {!listMovies && <Spinner />}
                    {listMovies && (
                        <div className="row row-cols-4 row-cols-sm-2 row-cols-md-4">
                            {listMovies.results.map((movie) => {
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
                </div>
            </div>
        </div>
    )
}

export default PagesMovies
