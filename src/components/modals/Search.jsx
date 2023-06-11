export default function Search(){
    return (
        <>
            <div id="search">
                <div className="container">
                    <form action="">
                        <input type="search" name="search" id="search-bar" placeholder="Rechercher..." />
                    </form>

                    <div className="results">
                        <div className="products products-1">
                            <div className="product">
                                <div className="img-product">
                                    <img src="./img/produits/m010t0517_b_mailing_box_25aug22 1.jpg" alt="" />
                                </div>
                                <div className="text-product">
                                    <h3>Box YouCare - Routine cheveux sec</h3>
                                    <p>Shampoing, Après shampoing, Masque hydratant...</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="img-product">
                                    <img src="./img/produits/flat-magnetic-boxes-mockup-opened-and-closed 1.jpg" alt="" />
                                </div>
                                <div className="text-product">
                                    <h3>Box YouCare - Routine cheveux sec</h3>
                                    <p>Shampoing, Après shampoing, Masque hydratant...</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="img-product">
                                    <img src="./img/produits/m003t0539_d_square_box_28jul22 1.jpg" alt="" />
                                </div>
                                <div className="text-product">
                                    <h3>Box YouCare - Routine cheveux sec</h3>
                                    <p>Shampoing, Après shampoing, Masque hydratant...</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="img-product">
                                    <img src="./img/produits/magnetic-boxes-mockup-falling 1.jpg" alt="" />
                                </div>
                                <div className="text-product">
                                    <h3>Box YouCare - Routine cheveux sec</h3>
                                    <p>Shampoing, Après shampoing, Masque hydratant...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}