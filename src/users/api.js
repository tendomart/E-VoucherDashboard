import React from 'react'


const api = axios.create({
    baseURL: 'http://localhost:8090/api/auth/signin',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
  });

export default api
