import { Link, NavLink } from "react-router-dom";

export default function Home(){

    return (
        <>
            <header className="background" id="header-home">
            
            <div className="two-background">
                <div>
                    <img src="./img/banner/banner1.jpg" alt=""/>
                </div>
                <div>
                    <img src="./img/banner/banner2.jpg" alt=""/>
                </div>
            </div>
        
            <div className="container">
                <h1>Youvence</h1>
        
                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>
        
                <Link to={"/"} className="btn btn-brown">Découvrez nos box</Link>
        
                <div className="circle">
                    <div className="middle"></div>
                     {/* <div className="text text-normal">
                        <p>Text Text - Text Text Text -</p>
                    </div>  */}
                    <div className="text text-reverse">
                        <p>Soin pour la peau et les cheveux - Parfum -&nbsp;</p>
                    </div>
                </div>
            </div>
        
               
        </header>
        <section id="a-propos" className="background" data-color="#915946">
            <div className="container">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Youvence</h2>
        
                <div className="content">
                    <div>
                        <img src="./img/youvence/a-propos.jpg" alt=""/>
                    </div>
                    <div className="animation animation-fade-content">
                        <p>Pellentesque id quisque blandit sit ut amet consectetur tristique. Morbi pretium sed lectus et eu egestas quis rhoncus eget. Id natoque risus lacinia sit. Aenean non rutrum condimentum etiam eu ut. Id tellus sit consequat integer amet vitae mauris adipiscing id.</p>
                        <p>Velit consequat egestas dictum mi amet tincidunt. Nibh fermentum est ut integer sed bibendum. Semper eget sagittis convallis ultrices id eu faucibus faucibus turpis. Pulvinar libero gravida proin at massa arcu vitae enim lectus.</p>
                        <p>Pharetra sit facilisis sit orci imperdiet. Venenatis eu euismod ut nam in sapien cursus aenean tortor. Molestie a enim accumsan scelerisque. Tincidunt mollis dui urna eget mauris. Morbi ac maecenas ultricies egestas arcu amet tortor in dolor.</p>
        
                        <Link to={"/"} className="btn-line btn-white">Voir plus</Link>
                    </div>
                </div>
            </div>
        </section>
        <section id="nouveautes" className="background" data-color="#F4C09D">
            <div className="container">
                <h2 className="title animation animation-bounce-letter" data-on-view="true"  data-duration="10" >Nouveautés </h2>
        
                <div className="products products-1">
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/m010t0517_b_mailing_box_25aug22 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/flat-magnetic-boxes-mockup-opened-and-closed 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/m003t0539_d_square_box_28jul22 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/magnetic-boxes-mockup-falling 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                </div>
        
                <Link to={"/"} className="btn-line btn-black">Découvrir nos box</Link>
            </div>
        </section>
        <section id="quelques-jours" className="background" data-color="#F2AAAE">
            <div className="container">
                <h2 className="title animation animation-bounce-letter" data-on-view="true"  data-duration="10" >Quelques jours </h2>
        
                <div className="products products-2">
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/m010t0517_b_mailing_box_25aug22 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/flat-magnetic-boxes-mockup-opened-and-closed 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/m003t0539_d_square_box_28jul22 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/magnetic-boxes-mockup-falling 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                </div>
        
                <Link to={"/"} className="btn-line btn-black">Découvrir nos box</Link>
            </div>
        </section>
        
        <section id="prochainement" className="background" data-color="#C9E0C4">
            <div className="container">
                <h2 className="title animation animation-bounce-letter" data-on-view="true"  data-duration="10" >Prochainement</h2>
        
                <div className="products products-3">
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/m010t0517_b_mailing_box_25aug22 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/flat-magnetic-boxes-mockup-opened-and-closed 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/m003t0539_d_square_box_28jul22 1.jpg" alt=""/>
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                    <div className="product animation animation-fade-content">
                        <div className="img-product">
                            <img src="./img/produits/magnetic-boxes-mockup-falling 1.jpg" alt="" />
                        </div>
                        <div className="text-product">
                            <h3>Box YouCare - Routine cheveux sec</h3>
                            <p>Shampoing, Après shampoing, Masque hydratant...</p>
                        </div>
                    </div>
                </div>
        
                <Link to={"/"} className="btn-line btn-black">Découvrir nos box</Link>
            </div>
        </section>
        </>
    )
}