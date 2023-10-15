import { Image } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getCreditMovie } from '../../services/api/tmdb'

function Actors({ id }) {
    const [listActors, setListActors] = useState(null)
    const title = 'Actors'

    useQuery(
        ['dataListCredit', 'movies', id],
        () => getCreditMovie(id),
        {
            refetchOnWindowFocus: false,
            onSuccess: (data) => setListActors(data),
            enabled: !!id,
        },
    )

    return (
        <>
            <div className="container-lg">
                <div className="row">
                    <div className="col">
                        <h5 className="mb-4">{title}</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        listActors && listActors?.cast.slice(0, 15).map(it => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={it.id}>
                                    <div className="row">
                                        <div className="col-5 mb-5">
                                            <Image
                                                alt={it.name}
                                                src={`https://image.tmdb.org/t/p/original/${it.profile_path}`}
                                                style={{ maxWidth: '-webkit-fill-available' }}
                                                preview={false}
                                            />
                                        </div>
                                        <div className="col-7">
                                            <p className="mb-0">Name: {it.name}</p>
                                            <p className="mb-0">Character: {it.character}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Actors
