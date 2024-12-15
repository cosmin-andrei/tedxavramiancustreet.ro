"use client";

import React, {useState} from "react";
import styles from "./MerchPage.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const MerchPage = () => {
    // Lista statică de produse
    const products = [
        {
            id: "1",
            title: "Tricou TEDx",
            category: "Îmbrăcăminte",
            price: 50,
            image: "/images/tricou.jpg",
            url: "https://exemplu.com/produs/tricou"
        },
        {
            id: "2",
            title: "Cana TEDx",
            category: "Accesorii",
            price: 30,
            image: "/images/cana.jpg",
            url: "https://exemplu.com/produs/cana"
        },
        {
            id: "3",
            title: "Agenda TEDx",
            category: "Birotică",
            price: 40,
            image: "/images/agenda.jpg",
            url: "https://exemplu.com/produs/agenda"
        }
    ];

    // State pentru filtrare și paginare
    const [filter, setFilter] = useState("Toate");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // Filtrarea produselor
    const filteredProducts = products.filter((product) =>
        filter === "Toate" ? true : product.category === filter
    );

    // Paginare
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Navigare pagini
    const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

    return (

        <>
            <Navbar/>
                <section className={styles.hero}>
                    <div className={styles.heroOverlay}></div>
                </section>

                {/* Filtrare */}
                <section className={styles.filterSection}>
                    <div className={styles.filterWrapper}>
                        {["Toate", "Îmbrăcăminte", "Birotică", "Accesorii"].map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ""}`}
                                onClick={() => {
                                    setFilter(category);
                                    setCurrentPage(1);
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Produse */}
                <section className={styles.storiesSection}>
                    <div className={styles.container}>
                        <div className={styles.cardsWrapper}>
                            {currentProducts.map((product) => (
                                <a
                                    key={product.id}
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.card}
                                >
                                    <Image
                                        width={500}
                                        height={300}
                                        src={product.image}
                                        alt={product.title}
                                        className={styles.productImage}
                                    />
                                    <h3 className={styles.sectionTitle}>{product.title}</h3>
                                    <div className={styles.productDetails}>
                                        <span className={styles.productPrice}>{product.price} RON</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Navigare pagini */}
                {filteredProducts.length > productsPerPage && (
                    <div className={styles.paginationWrapper}>
                        <button
                            className={styles.paginationButton}
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            &laquo; Pagina anterioară
                        </button>
                        <span className={styles.paginationInfo}>
                        Pagina {currentPage} din {totalPages}
                    </span>
                        <button
                            className={styles.paginationButton}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Următoarea pagină &raquo;
                        </button>
                    </div>
                )}

            <Footer/>
        </>
    );
};

export default MerchPage;
