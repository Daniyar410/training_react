import React from 'react'
import './Header.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const tooggleBurger = () => {
        setIsActive(!isActive)
    }

    const closeBurger = () => {
        setIsActive(false)
    }


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="wrap1">
                        <div className="d">
                            <h1>Digital Agency</h1>
                        </div>

                        <div className={`header_menu ${isActive ? 'active' : ''}`}>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Testimonials</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header