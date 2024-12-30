import { FeedbackForm } from "../components/FeedbackForm";

function Contacts () {
    return ( 
        <>
            <h1>Контакти</h1>
            <hr/>
            <article>
                    <p><b>Код ЄДРПОУ:</b> 42391609</p>
                    <p><b>Поштовий індекс:</b> <span class="postal-code">42001</span></p>
                    <p><b>Адреса:</b> 42001, Сумська область, м.Ромни, вул. Коржівська, 2</p>
                    <p><b>Графік роботи:</b> <span class="workhours">ПН-ПТ 8:00-17:00, обідня перерва з 12:00-13:00. СБ-НД - вихідні.</span></p>
                    <p><b>E-Mail адреса: <a href="mailto:irs-romny@ukr.net">irs-romny@ukr.net</a></b></p>
                    <p><b>Контактні телефони:</b> <abbr class="value">+380 96 151 3692</abbr></p>
                    <p><b>Керівник установи:</b> Шимко Юлія Іванівна</p>
            </article>
            <hr/>
            <FeedbackForm></FeedbackForm>
        </>
    );
}

export default Contacts