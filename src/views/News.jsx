import { Data } from "../components/filters/Data";

export function News() {
    return(
        <>
            <Data />
            <div className="news">
                <div className="news__img">
                    <img alt="news_img" width="200px" height="200px"/>
                </div>
                <div className="news__content">
                    <span className="news__content__title"></span>
                    <span className="news__content__date"></span>
                </div>
            </div>
        </>
    )
}