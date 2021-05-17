import axios from 'axios'

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '450fb165-b66f-49be-a0ba-5811af982034' },
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollowApi(id) {
    return instanse.delete(`follow/${id}`).then(response => response.data)
  },
  followApi(id) {
    return instanse.post(`follow/${id}`).then(response => response.data)
  },
}

export const profileAPI = {
  getProfileApi(userId) {
    return instanse.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instanse.get(`profile/status/${userId}`)
  },  
  updateStatusApi(status) {
    return instanse.put(`profile/status`, { status })
  },
}
export const authAPI = {
  getAuthApi() {
    return instanse.get(`auth/me`).then(response => response)
  },
}

export default usersAPI
