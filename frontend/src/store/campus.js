const LOAD = 'campus/LOAD'
const LOAD_ONE = 'campus/LOAD_ONE'

const load = (list) => ({
    type: LOAD,
    list,
})

const loadOne = (campus) => ({
    type: LOAD_ONE,
    campus,
})

export const getCampusList = () => async(dispatch) => {
    const response = await fetch('/api/campus')

    if (response.ok) {
        const list = await response.json()
        dispatch(load(list))
    }
}

export const getCampus = () => async(dispatch) => {
    const response = await fetch(`/api/campus/${id}`)

    if (response.ok) {
        const campus = await response.json()
        dispatch(loadOne(campus))
    }
}
