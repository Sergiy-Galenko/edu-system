import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { News } from '../views/News';
import { Home } from '../views/Home';
import TitleBar from '../components/TitleBar'
import { titleBar } from "../data/content";

export function Main() {
    return (
        <main>
            <TitleBar title={titleBar.title} subTitle={titleBar.subTitle} logo={titleBar.logo}/>
            <article>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </ Router>
            </article>
        </main>
    )
}