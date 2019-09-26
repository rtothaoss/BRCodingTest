import React from 'react'
import classes from './Header.module.css'

const Header = ({className, style, titleStyle, title, children}) => {
    return (
            <div className={className} style={style}>
                <p style={titleStyle}>{title}</p>
                {children}
            </div>
    )
}

export default Header;