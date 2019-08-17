import axios from 'axios';

const URL3 = 'https://script.google.com/macros/s/AKfycbxosPycRtZN20PgsywESuU6D9iITnyY1r4dEtfHU8jUBuEXwLc/exec';

export default class Portfolio {
	constructor(){
	}
	async fetch(){
		return axios.get(URL3).catch(err => err);
	}
}