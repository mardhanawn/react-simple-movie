import { Image } from 'antd'
import moment from 'moment'
import Star from '../../assets/Star.png'

function OverviewMovie({ data }) {
    return (
        <div style={{ width: '90vw', height: 330, position: 'relative' }}>
            <div className="row mt-3">
                <div className="col-md-3 col-sm-12 text-center">
                    <Image
                        style={{
                            width: 200,
                        }}
                        alt={data?.title}
                        src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                        preview={false}
                    />
                </div>
                <div className="col-md-9 col-sm-12">
                    <div className="row mb-4">
                        <h5>{moment(data?.release_date).format('YYYY')}</h5>
                        <h4>{data?.title}</h4>
                        <p>{data?.genres.map((genre) => `${genre.name} `)}</p>
                    </div>
                    <div className="row mb-4">
                        <div className="col-auto d-flex align-self-center">
                            <img src={Star} style={{ width: 30, height: 30 }} />
                            <h3 className="mb-0">{data?.vote_average.toFixed(1)}</h3>
                        </div>
                        <div className="col-auto border-right">
                            <p className="mb-0">USER SCORE</p>
                            <p className="font-size-12">{data?.vote_count}</p>
                        </div>
                        <div className="col-auto border-right">
                            <p className="mb-0">STATUS</p>
                            <p className="font-size-12">{data?.status}</p>
                        </div>
                        <div className="col-auto border-right">
                            <p className="mb-0">LANGUAGE</p>
                            <p className="font-size-12">
                                {data?.spoken_language &&
                                    data.spoken_language.map(
                                        (spklng) => `${spklng.english_name} ` || '-',
                                    )}
                            </p>
                        </div>
                        <div className="col-auto border-right">
                            <p className="mb-0">BUDGET</p>
                            <p className="font-size-12">{`$${data?.budget}`}</p>
                        </div>
                        <div className="col-auto">
                            <p className="mb-0">PRODUCTION</p>
                            <p className="font-size-12">{data?.production_companies[0].name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-auto'>
                        <h5>Overview</h5>
                        <p className="font-size-12">{data?.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewMovie
