import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://vue-update-670a3.firebaseio.com'
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
