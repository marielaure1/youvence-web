import { Link, NavLink } from "react-router-dom";

export default function Footer(){
    return (
        <>
            <footer>
                <div className="container">
                    <div>
                        <div>
                            <Link to={"/"}>Mentions Légales</Link>
                            <Link to={"/"}>CGV</Link>
                        </div>
                        <div>
                            <Link to={"/"}>Livraisons et retours</Link>
                            <Link to={"/"}>Protections des données</Link>
                        </div>
                    </div>
                    <div>
                        <img src="./img/logo/logo-white.png" alt="" />
                    </div>
                    <div>
                        <div>
                            <Link to={"/"}>Contact</Link>
                            <Link to={"/"}>A propos</Link>
                        </div>
                        <div>
                            <h3>Suivez-nous</h3>
                            <div>
                                {/* Icons */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}