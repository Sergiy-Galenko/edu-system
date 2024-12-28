import styles from "../styles/components/TitleBar.module.css";

const TitleBar = ({ title, subTitle, logo }) => {
	return (
		<div className={styles.titleBar}>
			{logo && <img src={logo} alt="logo" />}
			<div>
				<h1 className={styles.h1}>{title}</h1>
				{subTitle && <h2 className={styles.h2}>{subTitle}</h2>}
			</div>
		</div>
	);
};

export default TitleBar;
