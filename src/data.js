// import {v4 as uuidv4} from "uuid";
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
			id: 1,
			active: false,
		},
		{
			name: "Hey Gringo",
			cover:
				"https://i1.sndcdn.com/artworks-zp3g5hWdyYNa3Lte-vnTGDQ-t500x500.jpg",
			artist: "KALEO",
			audio: KALEO,
			color: ["#9C4618", "#A6B1B9"],
			id: 2,
			active: false,
		},
		{
			name: "Giant",
			cover:
				"https://upload.wikimedia.org/wikipedia/uk/3/36/Calvin_Harris_-_Giant.png",
			artist: " Calvin Harris & Rag'n'Bone Man",
			audio: Harris,
			color: ["#25152B", "#201328"],
			id: 3,
			active: false,
		},
		{
			name: "Close Eyes",
			cover:
				"https://i1.sndcdn.com/artworks-PGOhLJywxoxv3dDz-GcLxlg-t500x500.jpg",
			artist: "DVRST",
			audio: "https://cf-media.sndcdn.com/QuY4lAs1Rksz.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUXVZNGxBczFSa3N6LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjM2MDU1MjQ2fX19XX0_&Signature=ENzQ0P1-S1yn4hq5Arx3CzdvrGc-366Q2Vg8vimeKfsHzBUJWTzQQTgayCs148YleCtQl3clbJCIqQUlpnsZfrfudzVXRMlHHUosgr9JTYpPowlis~by7UZm9OPwzaOqxV8dLVc891bQxOpTUxh2WADaQvqyv78V--FjRv6SNFH6wLAbTW1Dn-4lgMkPGVjCqaF9NJ5hZBEXfct7M4tzZnffUur4c7gf7No91UoKLY72duMHhA9Z~yy9cE22RbJKZy9zUasVeR9QUNPdyyiuTxgdcDKPtYX6~LAFA6g5L8HA0SvtEJVuudnMLtnfdn4MhROnmH57uKGNANo-0ILC0w__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
			color: ["#DB4013", "#F2F2F2"],
			id: 4,
			active: false,
		}
		
	];
}


export default chillHop;