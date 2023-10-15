import moment from 'moment'
import { useState } from 'react'
import { useQuery } from 'react-query'

import ButtonCategory from '../Button/ButtonCategory'
import Card from '../Card'
import Spinner from '../Spinner'
import { getListNowPlaying, getListPopular, getListTopRated, getListUpcoming } from '../../services/api/tmdb'

function DiscoverMovies() {
    const [category, setCategory] = useState('now_playing')
    const [listMovies, setListMovies] = useState(null)

    useQuery(['dataListNowPlaying', 'movies'], () => getListNowPlaying(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: category === 'now_playing',
    })

    useQuery(['dataListPopular', 'movies'], () => getListPopular(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: category === 'popular',
    })

    useQuery(['dataListTopRated', 'movies'], () => getListTopRated(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: category === 'top_rated',
    })

    useQuery(['dataListReleaseDate', 'movies'], () => getListUpcoming(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovies(data),
        enabled: category === 'upcoming',
    })

    const categoryMovies = [
        {
            title: 'Now Playing',
            type: 'now_playing'
        },
        {
            title: 'Popular',
            type: 'popular'
        },
        {
            title: 'Top Rated',
            type: 'top_rated'
        },
        {
            title: 'Upcoming',
            type: 'upcoming'
        },
    ]

    return (
        <div className="container-lg">
            <div className="row">
                <div className="col">
                    <h4 className="mb-4">Discover Movies</h4>
                </div>
                <div className="col">
                    <div className="row d-flex justify-content-end">
                        {
                            categoryMovies.map(it => (
                                <div className="col-auto" key={it.type}>
                                    <ButtonCategory category={category} data={it} setCategory={setCategory} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {!listMovies && <Spinner />}
            {listMovies && (
                <div className="row row-cols-7 row-cols-sm-2 row-cols-md-5">
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
    )
}

export default DiscoverMovies
