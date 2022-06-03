import { ValidationError } from "../utils/validationError";
import { csrfFetch } from "./csrf";

const CREATE = 'image/CREATE'

const create = (newImage) => ({
    type: CREATE,
    newImage
})

export const createImage = (imageData) => async(dispatch) => {
    try {
        const response = await csrfFetch('/api/image/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(imageData)
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

        const image = await response.json()
        dispatch(create(image))
        return image
    } catch (error) {
        throw error
    }
}

const initialState = {}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                [action.newImage.id]: action.image
            }
        default:
            return state
    }
}

export default imageReducer
