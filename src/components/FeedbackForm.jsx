import { useReducer } from "react"
import styles from '../styles/components/FeedbackForm.module.css'

export function FeedbackForm() {
    const STATE = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }
    
    function reducer(state, action) {
        switch (action.type) {
            case 'SET_VALUE':
               return { ...state, [action.field]: action.value }
        }
    }

    function sendFeedback() {
        // Send the feedback to the server  
    }

    const [state, dispatch] = useReducer(reducer, STATE)

    return (
        <>
            <h1>Форма зворотнього зв'язку</h1>
            <form className={styles.feedbackForm}>
                <div className={styles.form__name}>
                    <label  
                        for="name"
                    >
                        Ім'я
                    </label>
                    <input 
                        id="name"
                        type="text"
                        onInput={(event) => dispatch({
                            type: 'SET_VALUE', 
                            field: 'name',
                            value: event.target.value
                        })}
                    />
                </div>
                <div className={styles.form__phone}>
                    <label  
                        for="phone"
                    >
                        Телефон
                    </label>
                    <input 
                        id="phone"
                        type="phone"
                        onInput={(event) => dispatch({
                            type: 'SET_VALUE', 
                            field: 'phone',
                            value: event.target.value
                        })}
                    />
                </div>
                <div className={styles.form__email}>
                    <label  
                        for="email"
                    >
                        Пошта
                    </label>
                    <input 
                        id="email"
                        type="mail"
                        onInput={(event) => dispatch({
                            type: 'SET_VALUE', 
                            field: 'email',
                            value: event.target.value
                        })}
                    />
                </div>
                <div className={styles.form__message}>
                    <label  
                        for="message"
                    >
                        Повідомлення
                    </label>
                    <textarea 
                        onInput={(event) => dispatch({
                            type: 'SET_VALUE', 
                            field: 'message',
                            value: event.target.value
                        })}
                    />
                </div>
                <button className={styles.submitButton} type="submit">Надіслати</button>
            </form>
        </>
    )
}