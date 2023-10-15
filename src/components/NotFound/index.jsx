function NotFound({ title }) {
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: 250 }}
            >
                <h5>Data {title} Not Found :(</h5>
            </div>
        </>
    )
}

export default NotFound
