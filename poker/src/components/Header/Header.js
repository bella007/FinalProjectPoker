import React from 'react';
import { withRouter } from 'react-router-dom';
import store from '../GameField/store/index';
import './header.css';
import headerBg from'./header-bg.png';
import headerLogo from'./logo.png';


let style = {
    backgroundImage: `url(${headerBg})` 
}
let logo = {
    backgroundImage: `url(${headerLogo})` 
}

class Header extends React.Component {

    handleClick = (href) => {
        this.props.history.push(href);
    }

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/')
    }

    handleLogoClick = () => {
        if (localStorage.getItem('isOwner')) {
            this.props.history.push('/dashboard')
        } else {
            this.props.history.push('/')
        }
    }
    handleRedirect = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <header style={style}>
               <div style={logo} className="gameLogo" onClick={this.handleLogoClick}></div>
                <nav className="header-nav">
                
                    <ul className="left-menu">
                        <li onClick={this.handleClick.bind(null, '/contact')}><p>Contact</p></li>
                        <li onClick={this.handleClick.bind(null, '/about')}><p>About</p></li>
                    </ul>
                    {localStorage.getItem('username') !== null ? 
                    <div className="user-profile">
                       
                        <div className="user-name" onClick={this.handleRedirect} >{JSON.parse(localStorage.getItem('username'))}</div>
                        <div className="user-logout" onClick={this.handleLogout}>Log out</div>
                    </div> :
                    <ul className="right-menu">
                        <li onClick={this.handleClick.bind(null, '/registration')}>Register</li>
                        <li onClick={this.handleClick.bind(null, '/login')}>Log in</li>
                    </ul>
                    }
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)