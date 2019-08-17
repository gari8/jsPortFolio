import axios from 'axios';

const URL2 = 'https://script.google.com/macros/s/AKfycbw3Cg2bLfJXtd5ck9KlTgzrKEDifG2MDopfcJozJujnE_8kH8o/exec';

export default class Info {
	constructor(){
	}
    async fetch(){
    	return axios.get(URL2).catch(err => err);
    }
}