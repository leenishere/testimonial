import React from 'react';
import styles from "./grid.module.css"
import PropTypes from "prop-types";

import logo1 from "../images/icons/image-danial.jpg";
import logo2 from "../images/icons/image-jonathan.jpg";
import logo3 from "../images/icons/image-jeanette.jpg";
import logo4 from "../images/icons/image-patrick.jpg";
import logo5 from "../images/icons/image-kira.jpg";

const Grid = ({name, position, testimony, quote, grid_id}) => {
    let color_dark;
    let profilepic;
    if (grid_id === "kira" || grid_id === "jeanette"){
        console.log("HI " + grid_id);
        color_dark = true;
    } else{
        color_dark = false;
    }

    // Set profile pic;
    switch(grid_id){
        case "kira":
            profilepic = logo5;
            break;
        case "jeanette":
            profilepic = logo3;
            break;
        case "danial":
            profilepic = logo1;
            break;
        case "jonathan":
            profilepic = logo2;
            break;
        case "patrick":
            profilepic = logo4;
            break;
    }
    
    return (
        <section className={styles.grid_background} data-grid={grid_id} >
            <div className={styles.wrapper}>
                <div className={styles.pos_left}>
                    <img className={styles.profileimage} src={profilepic} alt={grid_id}/>
                </div>
                <div className={styles.pos_right}>
                    <p className={color_dark? styles.name_dark : styles.name_light}>{name}</p>
                    <p className={color_dark? styles.title_dark : styles.title_light}>{position}</p>
                </div>
            </div>
            <p className={color_dark? styles.testimony_dark : styles.testimony_light}>{testimony}</p>
            <p className={color_dark? styles.quote_dark : styles.quote_light}>{quote}</p>
        </section>
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