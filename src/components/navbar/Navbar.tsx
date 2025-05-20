import './Navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="assets/logo.svg" alt="lam admin logo" />
                <span>lamadmin</span>
            </div>
            <div className="icons">
                <img src="assets/search.svg" alt="" className="icon" />
                <img src="assets/app.svg" alt="" className="icon" />
                <img src="assets/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="assets/notifications.svg" alt="" className="icon" />
                    <span>1</span>
                </div>
                <div className="user">

                    <img src="https://images.pexels.com/photos/27765567/pexels-photo-27765567/free-photo-of-stylish-glasses-complementing-her-pink-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="" />
                    <span>Someone</span>
                </div>
                <img src="assets/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar