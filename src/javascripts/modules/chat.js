import axios from 'axios';

const URL1 = 'https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec';

export default class Chat{
    async send(name, comment){
    	return await axios.post(URL1,{
    		name: name,
    		comment: comment
    	}, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .catch(err => err);
    }

    async fetch(){
    	return await axios.get(URL1).catch(err => err);
    }
}