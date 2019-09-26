import React from 'react'

const Button = ({alt, src, style, className}) => {
    return(
        <input type='image' alt={alt} src={src} style={style} className={className} />
    )
}

export default Button