import classes from './BooksBanner.module.css';

const BooksBanner = () => {
    return (
            <section className={classes.summary}>
                <h2>La librairie en ligne la plus complète de France</h2>
                <p>
                    Une véritable librairie de quartier mais avec les services des grandes enseignes qui tient dans votre smartphone.
                    Nous prônons un nouveau mode de distribution alternatif aux circuits traditionnels tout en protégeant votre librairie de proximité.
                    Aucun frais de port garanti si vous retirez votre livre dans la librairie au coin de votre rue.
                    Les librairies locales sont le cœur de ce réseau, alors maintenons ces lieux d'échanges et de conseils.
                </p>
            </section>
    )
}

export default BooksBanner;