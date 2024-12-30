import styles from "../styles/components/Search.module.css"

export function Search() {
    return (
        <div className="search_block">
            <input 
                type='text' 
                className={styles.search_block__input}
                placeholder=""
            />
            <button 
                type='submit'
                className={styles.search_block__button}
            > 
                Search
            </button>
        </div>
    )
}