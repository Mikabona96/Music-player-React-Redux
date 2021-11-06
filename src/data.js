import {v4 as uuidv4} from "uuid";
import Dua from './music/Dua.mp3'
import KALEO from './music/KALEO.mp3'
import Harris from './music/Harris.mp3'

function chillHop() {
	return [
		{
			name: "Break My Heart (DIMD Remix)",
			cover:
				"https://i1.sndcdn.com/artworks-pfcFgq1CHVLOaJiN-eTGfDw-t500x500.jpg",
			artist: "Dua Lipa",
			audio: Dua,
			color: ["#51C0E4", "#EBEBEB"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Hey Gringo",
			cover:
				"https://i1.sndcdn.com/artworks-zp3g5hWdyYNa3Lte-vnTGDQ-t500x500.jpg",
			artist: "KALEO",
			audio: KALEO,
			color: ["#9C4618", "#A6B1B9"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Giant",
			cover:
				"https://upload.wikimedia.org/wikipedia/uk/3/36/Calvin_Harris_-_Giant.png",
			artist: " Calvin Harris & Rag'n'Bone Man",
			audio: Harris,
			color: ["#25152B", "#201328"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Close Eyes",
			cover:
				"https://i1.sndcdn.com/artworks-PGOhLJywxoxv3dDz-GcLxlg-t500x500.jpg",
			artist: "DVRST",
			audio: "https://cf-media.sndcdn.com/QuY4lAs1Rksz.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUXVZNGxBczFSa3N6LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjM2MDU1MjQ2fX19XX0_&Signature=ENzQ0P1-S1yn4hq5Arx3CzdvrGc-366Q2Vg8vimeKfsHzBUJWTzQQTgayCs148YleCtQl3clbJCIqQUlpnsZfrfudzVXRMlHHUosgr9JTYpPowlis~by7UZm9OPwzaOqxV8dLVc891bQxOpTUxh2WADaQvqyv78V--FjRv6SNFH6wLAbTW1Dn-4lgMkPGVjCqaF9NJ5hZBEXfct7M4tzZnffUur4c7gf7No91UoKLY72duMHhA9Z~yy9cE22RbJKZy9zUasVeR9QUNPdyyiuTxgdcDKPtYX6~LAFA6g5L8HA0SvtEJVuudnMLtnfdn4MhROnmH57uKGNANo-0ILC0w__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
			color: ["#DB4013", "#F2F2F2"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Beaver Creek",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Daylight",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Ian Ewing, Strehlow",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Jazz Cabbage",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
			color: ["#A94949", "#FDF1DB"],
			id: uuidv4(),
			active: false
		},
		
	];
}

export default chillHop;