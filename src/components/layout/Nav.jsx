import { Link, NavLink } from "react-router-dom";

export default function Nav(){

    const toggleMenu = () => {
        document.querySelector("#menu").classList.remove("active")
        document.querySelector(".menu-btn").classList.remove("active")
    }

    return (
        <>
            <nav>
                <div className="container">
                    <div>
                        <div className="menu-btn" data-toggle="modal" data-target="#menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <img src="./img/logo/logo.png" alt="" className="logo" />
                    </div>
                    <div>
                        <iconify-icon icon="ei:search" data-toggle="modal" data-target="#search"></iconify-icon>
                        <iconify-icon icon="ph:user-circle-thin"></iconify-icon>
                        <iconify-icon icon="ph:heart-light"></iconify-icon>
                        <iconify-icon icon="simple-line-icons:basket"></iconify-icon>
                    </div>
                </div>
            </nav>

            <div id="menu">
                <div className="container">
                    <h2><Link to={`/`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Accueil</Link></h2>
                    <h2><Link to={`/youvence`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Youvence</Link></h2>
                    <h2><Link to={`/`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Box YouCare</Link></h2>
                    <h2><Link to={`/`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Box YouLuxe</Link></h2>
                    <h2><Link to={`/`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Box YouDiscovery</Link></h2>
                    <h2><Link to={`/`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Box Youvence</Link></h2>
                    <h2><Link to={`/`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" } onClick={toggleMenu}>Abonnements</Link></h2>
                </div>
            </div>
        </>
    )
}