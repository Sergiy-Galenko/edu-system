import {buttons} from "../data/visuallyImpairedButtons"
import {Search} from '../components/Search'
import styles from '../styles/components/Header.module.css'

export function Header() {
    return (
        <header>
            <section className={styles.visuallyImpairedButtons}>
                {buttons.map((el, index) => {
                    if(el.label === 'font_size') {
                    return (
                            <button 
                                style={{
                                    fontSize: `${(index * 10) + 20}px`
                                }}
                                onClick={el.onClick}
                                className={styles.font_size__button}
                            >
                                A
                            </button>
                        )
                    } else {
                        return (
                            <button 
                                style={{
                                    fontSize: '30px',
                                    backgroundColor: 
                                        el.value === "white" ?
                                        "white" : (el.value === 'black' ?
                                            "black" : "#a0c5d6"
                                        ),
                                    color:  
                                        el.value === "white" ?
                                        "black" : (el.value === 'black' ?
                                            "white" : "#004CFF"
                                        )
                                }}
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