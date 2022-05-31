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
    const response = await fetch('/api/campus')

    if (response.ok) {
        const campuses = await response.json()
        dispatch(load(campuses))
    }
}

export const getCampus = (id) => async(dispatch) => {
    const response = await fetch(`/api/campus/${id}`)

    if (response.ok) {
        const campus = await response.json()
        dispatch(loadOne(campus))
    }
}

const initialState = {}

const campusReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                campuses: action.campuses
            }
        default:
            return state
    }
}

export default campusReducer;
