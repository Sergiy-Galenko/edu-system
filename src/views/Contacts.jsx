import { FeedbackForm } from "../components/FeedbackForm";

function Contacts () {
    return ( 
        <section id="contacts">
            <h1>Контакти</h1>
            <hr/>
            <article>
                <p><b>Код ЄДРПОУ:</b> 42136366</p>
                <p><b>Поштовий індекс:</b> <span class="postal-code">42800</span></p>
                <p><b>Адреса:</b> 42800, Сумська обл., Охтирський р-н, смт Велика Писарівка, вул. Шкільна, буд. 6</p>
                <p><b>Графік роботи:</b> <span class="workhours">пн-чт 8:00-16:15, пт 8:00-16:00,сб-нд- вихідний. Обідня перерва з 12:00-13:00</span></p>
                <p><b>E-Mail адреса:</b> </p>
                <p><b>Контактні телефони:</b> <abbr class="value">05457 51240</abbr></p>
                <p><b>Керівник установи:</b> Романенко Ірина Олександрівна</p>
            </article>
            <hr/>
            <FeedbackForm></FeedbackForm>
        </section>
    );
}

export default Contacts