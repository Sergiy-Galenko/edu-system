import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { News } from '../views/News';
import { Home } from '../views/Home';
import TitleBar from '../components/TitleBar'
import { titleBar, asideData } from "../data/content";
import SideBarMenu from './SideBarMenu'
import { NavBar } from './NavBar'
import styles from "../styles/components/Main.module.css"
import Contacts from '../views/Contacts'

export function Main() {
    return (
        <main>
            <TitleBar title={titleBar.title} subTitle={titleBar.subTitle} logo={titleBar.logo}/>
            <article className={styles.main_block}>
                <NavBar />
                <section className={styles.main_block__content}>
                    <Router>   
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Routes>
                    </Router>
                </section>
                <SideBarMenu asideData={asideData}/>
            </article>
        </main>
    )
}