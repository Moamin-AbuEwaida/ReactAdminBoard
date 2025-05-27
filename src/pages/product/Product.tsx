import Single from '../../components/single/Single'
import { singleProduct } from '../../Data'
import './Product.scss'

const Product = () => {

    // fetching data and send to Single component

    return (
        <div className='product'>
            <Single {...singleProduct} />
        </div>
    )
}

export default Product