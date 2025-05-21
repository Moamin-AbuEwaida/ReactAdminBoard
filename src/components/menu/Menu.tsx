import { Link } from 'react-router'
import './Menu.scss'
import { menu } from '../../Data'

const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map((link) => (
                        <Link className="listItem" to={link.url} key={link.id}>
                            <img src={`assets/${link.icon}`} alt={link.title} />
                            <span className="listItemTitle">{link.title}</span>
                        </Link>
                    ))}


                </div>
            ))}


        </div>
    )
}

export default Menu