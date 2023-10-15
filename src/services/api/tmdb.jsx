import apiTMDB from '../axios'

export async function getListNowPlaying() {
    return apiTMDB.get(`/movie/now_playing`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getListPopular() {
    return apiTMDB.get(`/movie/popular`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getListTopRated() {
    return apiTMDB.get(`/movie/top_rated`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getListUpcoming() {
    return apiTMDB.get(`/movie/upcoming`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getListRating() {
    return apiTMDB.get(`/movie/top_rated`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getDetailMovie(id) {
    return apiTMDB.get(`movie/${id}`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getRecommendationMovie(id) {
    return apiTMDB.get(`movie/${id}/recommendations`).then((response) => {
        if (response) {
            const { results } = response.data
            const top5Recommendation = results.slice(0, 5)
            return top5Recommendation
        }
        return false
    })
}

export async function getCreditMovie(id) {
    return apiTMDB.get(`movie/${id}/credits`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getReviewMovie(id) {
    return apiTMDB.get(`movie/${id}/reviews`).then((response) => {
        if (response) {
            const { results } = response.data
            const top2Review = results.slice(0, 2)
            return top2Review
        }
        return false
    })
}
