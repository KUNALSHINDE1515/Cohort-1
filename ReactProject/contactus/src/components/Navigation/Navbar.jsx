import styles from "./Navigation.module.css"
function Navbar() {
    return (
        <>
        <nav className={
          `${styles.navigation} container`
        }>
           <div className="logo">
             <img src="/Frame 2 1@2x.png" alt="do some conding logo" />
           </div>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
           </ul>

        </nav>
        </>
    )
}

export default Navbar;
