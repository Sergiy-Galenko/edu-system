import "./App.css";
import SideBarMenu from "./components/SideBarMenu";
import TitleBar from "./components/TitleBar";
import { navBarData, titleBar } from "./data/content";

function App() {
	return (
		<div className="App">
			<TitleBar title={titleBar.title} subTitle={titleBar.subTitle} logo={titleBar.logo} />
			<SideBarMenu navBarData={navBarData} />
		</div>
	);
}

export default App;
