import {useEffect} from "react"
import { useDispatch } from "react-redux"
import { saveToken } from "../redux/token/tokenAction"

export function useToken() {
  const dispatch = useDispatch<any>()
  useEffect(() => dispatch(saveToken()), [])
}
