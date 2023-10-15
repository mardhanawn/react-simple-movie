import moment from 'moment'
import { useState } from 'react'
import { useQuery } from 'react-query'

import Spinner from '../Spinner'
import CardReview from '../Card/CardReview'
import NotFound from '../NotFound'

import { getReviewMovie } from '../../services/api/tmdb'

function ReviewMovies({ id }) {
    const [reviewMovies, setReviewMovies] = useState(null)
    const title = 'Reviews'

    const listReview = useQuery(['dataReview', 'movies', id], () => getReviewMovie(id), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setReviewMovies(data),
        enabled: !!id,
    })

    return (
        <div className="container-lg">
            <div className="row">
                <div className="col">
                    <h5 className="mb-4">{title}</h5>
                </div>
            </div>
            {reviewMovies && (
                <div className="row row-cols-sm-1 row-cols-md-2">
                    {reviewMovies.map((rm) => {
                        const dateComment = moment(rm.updated_at).format('LL')
                        return (
                            <div key={rm.id} className="col">
                                <CardReview
                                    author={rm.author}
                                    date={dateComment}
                                    content={rm.content}
                                />
                            </div>
                        )
                    })}
                </div>
            )}
            {listReview.status === 'loading' && <Spinner />}
            {listReview.status === 'success' && !reviewMovies?.length && <NotFound title={title} />}
        </div>
    )
}

export default ReviewMovies
