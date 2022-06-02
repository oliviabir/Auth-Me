import { ValidationError } from "../utils/validationError"
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

const addOne = (newCampus) => ({
    type: ADD_ONE,
    newCampus,
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

export const addCampus = (campusData) => async(dispatch) => {
    try {
        const response = await csrfFetch('/api/campus/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campusData)
        })
        console.log(response, 'RESPONSE FROM THUNKKKKK')
        if (!response.ok) {
            let error;
            if (response.status === 422) {
                error = await response.json()
                throw new ValidationError(error.errors, response.statusText)
            } else {
                let errorJSON;
                error = await response.text()
                try {
                    errorJSON = JSON.parse(error)
                } catch {
                    throw new Error(error)
                }
                throw new Error(`${errorJSON.title}: ${errorJSON.message}`)
            }
        }

        const campus = await response.json();
        dispatch(addOne(campus))
        return campus;
    } catch (error) {
        throw error;
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
                [action.newCampus.id]: action.campus
            }
        default:
            return state
    }
}

export default campusReducer;
