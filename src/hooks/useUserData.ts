import { useEffect } from 'react'
import { useToken } from './useToken'
import { TRootState } from '../redux/initState'
import { useSelector, useDispatch } from 'react-redux'
import {  meRequest } from '../redux/me/meAction'

export function useUserData() {
  useToken()
  const token = useSelector<TRootState>(state => state.token)
  const data = useSelector<TRootState, any>(state => state.me.data)
  const loading = useSelector<TRootState, any>(state => state.me.loading)
  const dispatch = useDispatch<any>()
  
  useEffect(() => dispatch(meRequest()), [token])
    
  return {
    data,
    loading
  }
}
