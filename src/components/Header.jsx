import {buttons} from "../data/visuallyImpairedButtons"
import {Search} from '../components/Search'
import styles from '../styles/components/Header.module.css'

export function Header() {
    return (
        <header>
            <section>
                {buttons.map((el) => {
                    if(el.label === 'font_size') {
                    return (
                            <button 
                                onClick={el.onClick}
                                className={styles.font_size__button}
                            >
                                A
                            </button>
                        )
                    } else {
                        return (
                            <button 
                                onClick={el.onClick}
                                className={styles.font_color__button}
                            >
                                K
                            </button>
                        )
                    }
                })}
            </section>
            <section className="search">
                <Search />
            </section>
        </header>
    );
}