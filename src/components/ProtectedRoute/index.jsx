import Cookies from "js-cookie"
import { useEffect } from "react"
import { useNavigate} from "react-router-dom"

function ProtectedRoute(props) {
    const {Comp} = props
    const navigate = useNavigate()
    const jwtToken=Cookies.get("jwt_token")

    useEffect(()=>{
        if(jwtToken===undefined){
            navigate("/login")
        }
    })
    return <Comp/>
}

export default ProtectedRoute
