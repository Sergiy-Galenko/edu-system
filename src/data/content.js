export const titleBar = {
	title: 'Комунальна установа "Інклюзивно-ресурсний центр"',
	subTitle: "Роменської міської ради Сумської області",
	logo: "https://rada.info/upload/users_files/42136366/gerb/13254179621.png",
};

export const navBarData = [
	{
		label: "Home",
		url: "/",
	},
	{
		label: "Tutorials",
		submenu: [
			{
				label: "React",
				url: "/react",
				submenu: [
					{
						label: "Hooks",
						url: "/react/hooks",
					},
					{
						label: "Context",
						url: "/react/context",
					},
				],
			},
			{
				label: "JavaScript",
				url: "/javascript",
			},
		],
	},
	{
		label: "About",
		submenu: [
			{
				label: "Company",
				submenu: [
					{
						label: "Team",
						url: "/team",
					},
					{
						label: "History",
						url: "/history",
					},
				],
			},
			{
				label: "Team",
				url: "/team",
			},
		],
	},
];
