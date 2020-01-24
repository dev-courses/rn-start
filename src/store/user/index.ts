import { UserActionsType } from "./actions"
import UserData from "src/types/user"

import {
  LOGIN_USER,
  LOGOUT_USER,
} from './actions'

export interface UserReducerState {
  data: UserData | null,
}

const initialState = {
 data: null,
}


export default (state: UserReducerState = initialState, action: UserActionsType): UserReducerState => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, data: action.payload }
    case LOGOUT_USER:
      return { ...initialState }

    default:
      return state
  }
}