import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faBars, faUser, faGlobe } from "@fortawesome/free-solid-svg-icons";

import styles from './header.module.scss'

const AppHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <button className={styles.iconButton}>
                    <FontAwesomeIcon icon={faHouseChimney} size="2xl" style={{ color: "#7c60d2" }} />
                    <div className={styles.iconButtonTitle}>BookApart</div>
                </button>
            </div>
            <div className={styles.settingsWrapper}>
                <div className={styles.rentOutButtonWrapper}>
                    <button className={styles.rentOutButton}>Сдать жильё на BookApart</button>
                </div>
                <div className={styles.languageButtonWrapper}>
                    <button className={styles.languageButton}>
                    <FontAwesomeIcon icon={faGlobe} size="xl" />
                    </button>
                </div>
                <div className={styles.profileButtonWrapper}>
                    <button className={styles.profileButton}>
                        <div className={styles.profileMenu}>
                            <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#4a4c4f", }} />
                        </div>
                        <div className={styles.profileIcon}>
                            <FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#4a4c4f", }}/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader