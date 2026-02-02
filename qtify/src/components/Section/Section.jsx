    import React, { useEffect, useState, useRef } from "react";
    import styles from "./Section.module.css";
    import axios from "axios";
    import Card from "../Card/Card";
    import Button from "../Button/Button";
    function Section({ title }) {
    const [albums, setAlbums] = useState([]);
    const [showAll, setShowAll] = useState(false);
    // const [itemsPerRow, setItemsPerRow] = useState(7);

    const gridRef = useRef(null);

    const fetchAlbums = async () => {
        const res = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
        );
        setAlbums(res.data);
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    useEffect(() => {
        const calculateItems = () => {
        if (!gridRef.current) return;

        const containerWidth = gridRef.current.offsetWidth;

        const cardWidth = 159; // your card width
        const gap = 20; // grid gap

        const count = Math.floor(containerWidth / (cardWidth + gap));
        // setItemsPerRow(count || 1);
        };

        calculateItems();
        window.addEventListener("resize", calculateItems);

        return () => window.removeEventListener("resize", calculateItems);
    }, []);

    const visibleAlbums = showAll ? albums : albums;

    return (
        <div className={styles.section}>
        <div className={styles.header}>
            <h2>{title}</h2>

            <Button
            text={showAll ? "Collapse" : "Show All"}
            onClick={() => setShowAll(!showAll)}
            />
        </div>

        <div className={styles.grid} ref={gridRef}>
            {visibleAlbums.map((album) => (
            <Card
                key={album.id}
                image={album.image}
                follows={album.follows}
                title={album.title}
            />
            ))}
        </div>
        </div>
    );
    }

    export default Section;
