import { TailSpin } from "react-loader-spinner";
import "./index.css"

const Loader = () =>{
    return <div className="loader-cont">
        <TailSpin
          height="80"
          width="80"
          color="#F7931E"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
    </div>
  }

export default Loader
