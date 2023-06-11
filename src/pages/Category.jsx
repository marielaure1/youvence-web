import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Category(){
    const [ getColor, setColor ] = useState(["#FFF", "#FFF"])

    useEffect(() => {

        let color1 = "#F2AAAE"
        let color2 = "#FDE9EA"

      setColor([color1, color2])
    
      
    }, [])
    

    return(
        <>
        
            <header className="background header-page" data-color={getColor[0]}>
                <div className="two-background">
                    <div className="text-column">
                        <h1>Box YouCare</h1>
            
                        <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>
                
                    </div>

                    <div className="img-column">
                        <img src="../img/banner/banner4.jpg" alt="" />
                    </div>
                </div>    
            </header>

            <section id="products" className="background" data-color={getColor[1]} >
                <div className="container">
                    <div className="filters">
                        
                        <div className="filter-section">
                            <div className="top">
                                <h3>Catégories</h3>
                                <span className="btn-filter-section" data-toggle="accordeon" data-target="#categories" data-filter="categories"></span>
                            </div>
                            <div className="filter-list" id="categories">
                                <span className="filtre active" data-filtre-categories="all">Tout</span>
                                <span className="filtre" data-filtre-categories="shampoing">Shampoing</span>
                                <span className="filtre" data-filtre-categories="masque">Masque</span>
                                <span className="filtre" data-filtre-categories="apres shampoing">Après Shampoing</span>
                                <span className="filtre" data-filtre-categories="creme capillaire">Crème capillaire</span>
                                <span className="filtre" data-filtre-categories="leave-in conditionner">Leave-in conditionner</span>
                                <span className="filtre" data-filtre-categories="parfum">Parfum</span>
                                <span className="filtre" data-filtre-categories="brume">Brume</span>
                                <span className="filtre" data-filtre-categories="deodorant">Déodorant</span>
                                <span className="filtre" data-filtre-categories="creme de nuit">Crème de nuit</span>
                                <span className="filtre" data-filtre-categories="creme de jour">Crème de jour</span>
                            </div>
                        </div>

                        <div className="filter-section">
                            <div className="top">
                                <h3>Type de peau</h3>
                                <span className="btn-filter-section" data-toggle="accordeon" data-target="#peau" data-filter="peau"></span>
                            </div>
                            <div className="filter-list" id="peau">
                                <span className="filtre active" data-filtre-peau="all">Tout</span>
                                <span className="filtre" data-filtre-peau="grasse">Peau grasse</span>
                                <span className="filtre" data-filtre-peau="sec">Peau sec</span>
                                <span className="filtre" data-filtre-peau="mixte">Peau mixte</span>
                            </div>
                        </div>

                        <div className="filter-section">
                            <div className="top">
                                <h3>Type de cheveux</h3>
                                <span className="btn-filter-section" data-toggle="accordeon" data-target="#cheveux" data-filter="cheveux"></span>
                            </div>
                            <div className="filter-list" id="cheveux">
                                <span className="filtre active" data-filtre-cheveux="all">Tout</span>
                                <span className="filtre" data-filtre-cheveux="sec">Cheveux sec</span>
                                <span className="filtre" data-filtre-cheveux="gras">Cheveux gras</span>
                                <span className="filtre" data-filtre-cheveux="crepus">Cheveux crépus</span>
                                <span className="filtre" data-filtre-cheveux="boucles">Cheveux bouclés</span>
                                <span className="filtre" data-filtre-cheveux="lisses">Cheveux lisses</span>
                            </div>
                        </div>
                        
                    </div>
            
                    <div className="products">
                        <div className="product animation animation-fade-content" data-filter-categories='["shampoing", "masque", "creme capillaire"]' data-filter-peau="" data-filter-cheveux='["sec"]'>
                            <div className="img-product">
                                <img src="../img/produits/m010t0517_b_mailing_box_25aug22 1.jpg" alt=""/>
                            </div>
                            <div className="text-product">
                                <h3>Box YouCare - Routine cheveux sec</h3>
                                <p>Shampoing, Après shampoing, Masque hydratant...</p>
                            </div>
                        </div>
                        <div className="product animation animation-fade-content" data-filter-categories='["deodorant", "brume", "creme de nuit"]' data-filter-peau='["grasse"]' data-filter-cheveux="">
                            <div className="img-product">
                                <img src="../img/produits/flat-magnetic-boxes-mockup-opened-and-closed 1.jpg" alt=""/>
                            </div>
                            <div className="text-product">
                                <h3>Box YouCare - Routine cheveux sec</h3>
                                <p>Shampoing, Après shampoing, Masque hydratant...</p>
                            </div>
                        </div>
                        <div className="product animation animation-fade-content" data-filter-categories='["shampoing", "masque", "parfum"]' data-filter-peau='["grasse"]' data-filter-cheveux='["lisse"]'>
                            <div className="img-product">
                                <img src="../img/produits/m003t0539_d_square_box_28jul22 1.jpg" alt=""/>
                            </div>
                            <div className="text-product">
                                <h3>Box YouCare - Routine cheveux sec</h3>
                                <p>Shampoing, Après shampoing, Masque hydratant...</p>
                            </div>
                        </div>
                        <div className="product animation animation-fade-content"  data-filter-categories='["shampoing", "masque", "creme capillaire"]' data-filter-peau="" data-filter-cheveux='["sec"]'>
                            <div className="img-product">
                                <img src="../img/produits/magnetic-boxes-mockup-falling 1.jpg" alt=""/>
                            </div>
                            <div className="text-product">
                                <h3>Box YouCare - Routine cheveux sec</h3>
                                <p>Shampoing, Après shampoing, Masque hydratant...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}