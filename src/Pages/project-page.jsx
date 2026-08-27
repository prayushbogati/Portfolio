import { useParams } from 'react-router-dom'

const Project = () => {
    const { id } = useParams();
    return (
        <div className='min-h-screen'>{id} page</div>
    )
}

export default Project