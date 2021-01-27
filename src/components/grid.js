import React from 'react';
import styles from "./grid.module.css"
import Image from "../components/image"
import PropTypes from "prop-types";

const Grid = ({name, position, testimony, quote, grid_id}) => {
    console.log(styles)

    return (
        <div className={styles.grid_background} data-grid={grid_id} >
            <section className={styles.wrapper}>
                <div className={styles.pos_left}>
                    <p>hi</p>
                </div>
                <div className={styles.pos_right}>
                    <h4 className={styles.name_dark}>{name}</h4>
                    <h5 className={styles.title_dark}>{position}</h5>
                </div>
            </section>
            <p className={styles.name_dark}>{testimony}</p>
            <p className={styles.title_dark}>{quote}</p>
        </div>
    )
}

// Set Type to prop data
Grid.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    testimony: PropTypes.string,
    quote: PropTypes.string,
    grid_id: PropTypes.string,
}


// Set default data to prop
Grid.defaultProps = {
    name: '',
    position: '',
    testimony: '',
    quote: '',
    grid_id: '',
}

export default Grid