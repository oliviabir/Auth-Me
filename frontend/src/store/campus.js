import { ValidationError } from "../utils/validationError"
import { csrfFetch } from "./csrf"

const LOAD = 'campus/LOAD'
const ADD_ONE = 'campus/ADD_ONE'
const EDIT_ONE = 'campus/EDIT_ONE'
const DELETE_ONE = 'campus/DELETE_ONE'

const load = (campuses) => ({
    type: LOAD,
    campuses,
})

const addOne = (newCampus) => ({
    type: ADD_ONE,
    newCampus,
})

const editOne = (editedCampus) => ({
    type: EDIT_ONE,
    editedCampus
})

const deleteOne = (campusToDelete) => ({
    type: DELETE_ONE,
    campusToDelete
})

export const getCampusList = () => async(dispatch) => {
    const response = await csrfFetch('/api/campus')

    if (response.ok) {
        const campuses = await response.json()
        dispatch(load(campuses))
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

        const campus = await response.json()
        dispatch(addOne(campus))
        return campus

    } catch (error) {
        throw error
    }

}

export const editCampus = (data, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/campus/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const editedCampus = await response.json()
        dispatch(editOne(editedCampus))
        return editedCampus
    }
}

export const deleteCampus = (campusId) => async(dispatch) => {
    const response = await csrfFetch(`/api/campus/${campusId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const deletedCampus = await response.json()
        dispatch(deleteOne(deletedCampus))
        return deletedCampus;
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
        case ADD_ONE:
            return {
                ...state,
                [action.newCampus.id]: action.newCampus
            }
        case EDIT_ONE:
            const updatedState = {
                ...state,
                [action.editedCampus.id]: {
                    ...state[action.editedCampus.id],
                    ...action.editedCampus
                }
            }
            return updatedState
        case DELETE_ONE:
            const deleteState = {...state}
            delete deleteState[action.campusToDelete]
            return deleteState
        default:
            return state
    }
}

export default campusReducer;
