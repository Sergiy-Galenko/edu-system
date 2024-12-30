export const titleBar = {
	title: 'Комунальна установа "Інклюзивно-ресурсний центр"',
	subTitle: "Роменської міської ради Сумської області",
	logo: "https://rada.info/upload/users_files/42136366/gerb/13254179621.png",
};

export const asideData = [
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

export const navBar = [
	{
		label: "Головна",
		url: "/",
	},
	{
		label: "Новини",
		url: "/news",
	},
	{
		label: "Фотогалерея",
		url: "/photos",
	},
	{
		label: "Контакти",
		url: "/contacts",
	},
	{
		label: "Оголошення",
		url: "/announcments",
	},
	{
		label: "Батькам",
		url: "/forParrents",
	},
]