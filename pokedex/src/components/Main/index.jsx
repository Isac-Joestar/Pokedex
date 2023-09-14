import styles from './index.module.css'
function Main(){
    return(
        <main className={styles.main}>
            <section className={styles.top}>
                <div className={styles.left}>
                    <p>
                        Veja as habilidades dos mais diversos pokémons 
                        e embarque na sua jornada para se tornar um mestre Pokémon.
                    </p>
                    <input type="text" placeholder='Nome ou número'/>
                </div>
                <div className={styles.ad}>
                    <p>AD</p>
                </div>
            </section>
            <section className={styles.bottom}>
                <div className={styles.img}>
                    <img src="./images/Divisoria.svg" alt="" />
                </div>
                <div className={styles.container}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Main