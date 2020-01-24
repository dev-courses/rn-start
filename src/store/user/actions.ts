import UserData from 'src/types/user';

export const LOGIN_USER = 'USER/LOGIN_USER'
export const LOGOUT_USER = 'USER/LOGOUT_USER'

interface LoginUserAction {
  type: typeof LOGIN_USER
  payload: UserData
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER,
}

export type UserActionsType = LoginUserAction | LogoutUserAction

export function setUserAfterLogin(user: UserData): UserActionsType {
  return {
    type: LOGIN_USER,
    payload: user,
  }
}

export function logout(user: UserData): UserActionsType {
  return {
    type: LOGOUT_USER,
  }
}

