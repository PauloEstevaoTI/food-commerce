import {useContext} from 'react'
import { SnackContext } from '../contexts/SnackContext'

export function useSnack(){
  const contextData = useContext(SnackContext)

  return contextData;
}
