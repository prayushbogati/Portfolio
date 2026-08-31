import { useParams } from 'react-router-dom'

const Project = () => {
    const { id } = useParams();
    return (
        <div className='min-h-screen'>project page</div>
    )
}

export default Project