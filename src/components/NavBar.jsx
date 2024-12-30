import {navBar} from "../data/content"

export function NavBar() {
    return (
        <nav>
            <ul>
                {navBar.map(el => {
                    return (
                        <li><a href={el.url}>{el.label}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}