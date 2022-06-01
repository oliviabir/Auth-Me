import { csrfFetch } from "./csrf"

const LOAD = 'campus/LOAD'
const LOAD_ONE = 'campus/LOAD_ONE'
const ADD_ONE = 'campus/ADD_ONE'

const load = (campuses) => ({
    type: LOAD,
    campuses,
})

const loadOne = (campus) => ({
    type: LOAD_ONE,
    campus,
})

export const addOne = (campus) => {
    return {
        type: ADD_ONE,
        campus,
    }
}

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

export const addCampus = (campusData) => async(dispatch) => {
    const response = await csrfFetch('/api/campus/new', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campusData)
    })
    console.log(response, 'RESPONSE FROM POST REQUREST')
    if (response.ok) {
        const campus = await response.json();
        dispatch(addOne(campus))
        return campus;
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

            return {
                ...state,
                campus: action.campus
            }
        case ADD_ONE:
            return {
                ...state,
                [action.campus.id]: action.campus
            }
        default:
            return state
    }
}

export default campusReducer;
