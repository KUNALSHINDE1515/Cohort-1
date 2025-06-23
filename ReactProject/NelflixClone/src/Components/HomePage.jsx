import styles from "./Home.module.css"
import SignUp from "./SignUp";
function HomePage() {
    return (
        <>
        <div className={styles.mainContainer}>
            <div className={styles.HomePage}>
                <nav className={styles.navbar}>
                    <h1>Nelflix</h1>
                </nav>
                <SignUp />
        </div>
        </div>
        </>
    )
}

export default HomePage;
