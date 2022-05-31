import { csrfFetch } from "./csrf"

const LOAD = 'campus/LOAD'
const LOAD_ONE = 'campus/LOAD_ONE'

const load = (campuses) => ({
    type: LOAD,
    campuses,
})

const loadOne = (campus) => ({
    type: LOAD_ONE,
    campus,
})

export const getCampusList = () => async(dispatch) => {
    const response = await csrfFetch('/api/campus')

    if (response.ok) {
        const campuses = await response.json()
        dispatch(load(campuses))
    }
}

export const getCampus = (campusId) => async(dispatch) => {
    const response = await csrfFetch(`/api/campus/${campusId}`)

    if (response.ok) {
        const campus = await response.json()
        dispatch(loadOne(campus))
    }
}

const initialState = {}

const campusReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const normalizedCampuses = {}
            action.campuses.forEach(campus => {
                normalizedCampuses[campus.id] = campus
            })
            return {
                ...state,
                ...normalizedCampuses
            }
        case LOAD_ONE:
            const normalizedCampus = {}
            action.campus.forEach(campus => {
                normalizedCampus[campus.id] = campus
            })
            return {
                ...state,
                ...normalizedCampus
            }
        default:
            return state
    }
}

export default campusReducer;
