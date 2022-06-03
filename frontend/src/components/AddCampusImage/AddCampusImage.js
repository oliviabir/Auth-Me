import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ValidationError } from '../../utils/validationError'
import { createImage } from '../../store/image'

const AddCampusImage = ({ campusId }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [images, setImages] = useState([{url: ''}])
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            campusId,
            images,
            description
        }

        let image
        try {
            image = await dispatch(createImage(payload))
        } catch (error) {
            if (error instanceof ValidationError) setErrors(errors.error)
            else setErrors({ overall: error.toString().slice(7) })
        }

        if (image) {
            setErrors({})
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input
                type='text'
                value={images || ''}
                required
                placeholder='Enter Image URL'
                onChange={(e) => setImages(e.target.value)}
            />
            <input
                type='text'
                value={description || ''}
                required
                placeholder='Description of Image'
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type='submit'>Submit Image</button>
        </div>
    </form>
  )
}

export default AddCampusImage
