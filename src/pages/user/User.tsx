import Single from '../../components/single/Single'
import { singleUser } from '../../Data'
import './User.scss'

const User = () => {

    // fetching data and send to Single component
    return (
        <div className='user'>
            <Single {...singleUser} />
        </div>
    )
}

export default User