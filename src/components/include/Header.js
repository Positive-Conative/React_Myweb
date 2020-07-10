import React from 'react';
import './Header.css';
import { Link } from 'react-router';

class Header extends React.Component{
    render(){
        return (
            <div className="title">
                <Link to="/" className="logo">
                    Positive - Conative
                </Link>
                <div className="menu">
                    <div className="parallelogram"></div>
                    <Link to="/Introduce" className="menu-item">Introduce</Link>
                    <Link to="/GuestBook" className="menu-item">GuestBook</Link>
                </div>
            </div>
        );
    }
}

// import { Link } from 'react-router';
// const MenuItem = ({active, children, to}) => (
//     <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
//             {children}
//     </Link>
// );

// const Header = (props, context) => {
//     const { router } = context;
//     return (
//         <div className="Hello">
//             <div className="logo">
//                 Positive - Conative
//             </div>
//             <div className="menu">
//                 <div className="parallelogram"></div>
//                 <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
//                 <MenuItem to={'/about'} active={router.isActive('/about')}>소개</MenuItem>
//                 <MenuItem to={'/post'} active={router.isActive('/post')}>포스트</MenuItem>
//             </div>
//         </div>
//     );
// };
// Header.contextTypes = {
//     router: React.PropTypes
// }

export default Header;