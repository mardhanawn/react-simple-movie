import { Image } from "antd"
import OverviewMovie from "../OverviewMovie"

function PosterMovie(data) {
    const detailPoster = data?.data

    return (
        <>
            <div className="vw-90 mb-5">
                <Image
                    alt={detailPoster?.title}
                    src={`https://image.tmdb.org/t/p/original/${detailPoster?.backdrop_path}`}
                    style={{ maxWidth: '-webkit-fill-available' }}
                    preview={false}
                />
                <OverviewMovie data={detailPoster} />
            </div>
        </>
    )
}

export default PosterMovie
