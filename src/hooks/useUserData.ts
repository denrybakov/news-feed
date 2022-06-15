import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { tokenContext } from '../shared/context/tokenContext'
import { useToken } from './useToken'
import { TRootState } from '../redux/initState'
import { useSelector } from 'react-redux'
import { IUserData, meRequest } from '../redux/me/meAction'
import { useDispatch } from 'react-redux'

export function useUserData() {
  useToken()
  const token = useSelector<TRootState>(state => state.token)
  const data = useSelector<TRootState, any>(state => state.me.data)
  const loading = useSelector<TRootState, any>(state => state.me.loading)
  
  const dispatch = useDispatch<any>()
  
  useEffect(() => {
    if (!token) return
    dispatch(meRequest())
  }, [token])
    
  return {
    data,
    loading
  }
}
