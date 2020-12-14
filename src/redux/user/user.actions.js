import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER, // 'SET_CURRENT_USER'
  payload: user // {id: "YjVlIIWfNNY1mSuhGn162ek7OCb2", createdAt: t, email: "mail@gmail.com", displayName: "Sean"}
}) // () means return