export interface User {
  email: string,
  password: string,
  token: string
}

export interface UserToken {
  email: string,
  token: string
}

export const USER_TOKEN: any[] = [
  {
    "email": "test01@gmail.com",
    "token": "32413425324ws"
  },
  {
    "email": "test02@gmail.com",
    "token": "324142342234wwe"
  },
]
