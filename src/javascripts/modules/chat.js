import axios from 'axios'

const URL = 'https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec'
export default class Chat {
  constructor () {
  }

  async send (name, comment) {
    return await axios.post(URL, {
      name,
      comment
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .catch(err => err)
  }

  async fetch () {
    return await axios.get(URL)
  }
}
