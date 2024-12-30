import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

import styles from "../styles/components/SideBar.module.css";

function SideBarMenu({ asideData }) {
	return (
		<aside className={styles.sideBarMenu}>
			<ul className={styles.ul}>
				{asideData.map((item, index) => {
					return (
						<SideBarElement key={index} title={item.label} link={item.url} submenu={item.submenu} level={0} />
					);
				})}
			</ul>
		</aside>
	);
}

function DropDownMenu({ submenu, isOpen, level }) {
	const backgroundColor = `hsl(0, 0%, ${95 - level * 5}%)`;

	return (
		<ul
			className={styles.dropDownMenu}
			style={{
				"--bg-color": backgroundColor,
				display: isOpen ? "block" : "none",
			}}>
			{submenu.map((item, index) => {
				return (
					<SideBarElement
						key={index}
						title={item.label}
						link={item.url}
						submenu={item.submenu}
						level={level + 0.5}
					/>
				);
			})}
		</ul>
	);
}

function SideBarElement({ title, link, submenu, level }) {
	const [isOpen, setIsOpen] = useState(false);

	function openSubmenu() {
		if (!isOpen) {
			setIsOpen(true);
		}
	}

	function closeSubmenu() {
		if (isOpen) {
			setIsOpen(false);
		}
	}

	return (
		<li className={styles.li} onMouseLeave={submenu ? closeSubmenu : null}>
			<div className={styles.nestedDiv} onMouseEnter={submenu ? openSubmenu : null}>
				<FaChevronLeft color="grey" style={{ opacity: submenu ? 1 : 0 }} />
				<a className={styles.a} href={link}>
					{title}
				</a>
			</div>
			{submenu && <DropDownMenu submenu={submenu} isOpen={isOpen} level={level} />}
		</li>
	);
}

export default SideBarMenu;
