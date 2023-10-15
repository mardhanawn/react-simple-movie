import { Link } from 'react-router-dom'

function PagesError404() {
    return (
        <div
            className="container d-flex flex-column justify-content-center align-items-start mb-auto text-light"
            style={{ height: 600 }}
        >
            <h3>Page not found</h3>
            <h4>
                This page is deprecated, deleted, or does not exist at all <br /> 404 —
            </h4>
            <div className="font-weight-bold font-size-70 mb-1"></div>
            <Link to="/" className="btn btn-outline-primary width-100">
                Go Back
            </Link>
        </div>
    )
}

export default PagesError404
