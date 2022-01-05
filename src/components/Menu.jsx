import {NavLink} from 'react-router-dom'


const menuItems = [
    {path: '/', name: 'Start'},
    {path: '/projects', name: 'Projekty'},
    {path: '/contact', name: 'Kontakt'}
]

const Menu = ({menuOpen, setMenuOpen}) => {

    const handleMenu = ()=>{
        setMenuOpen(false)
    }

    const items = menuItems.map(item=>(
        <li key={item.name} className='listItem' onClick={handleMenu}>
            <NavLink to={item.path} exact>{item.name}</NavLink>
        </li>

    ))
    return ( <div className={"menu " + (menuOpen && 'active')}>
        <span className='span' >menu</span>
        <ul className='list'>
            {items}
        </ul>
    </div> );
}
 
export default Menu;