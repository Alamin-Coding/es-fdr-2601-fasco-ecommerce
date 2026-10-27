import Brandlogo1 from "../../assets/logo.svg"
import Brandlogo2 from "../../assets/logo (1).svg"
import Brandlogo3 from "../../assets/logo (2).svg"
import Brandlogo4 from "../../assets/logo (3).svg"
import Brandlogo5 from "../../assets/logo (4).svg"
const BrandLogos = () => {
  return (
    <div className="py-[82px] px-[320px]">
        <div className="flex gap-1 justify-center">
            <img src={Brandlogo1} alt="logo"/>
            <img src={Brandlogo2} alt="logo"/>
            <img src={Brandlogo3} alt="logo"/>
            <img src={Brandlogo4} alt="logo"/>
            <img src={Brandlogo5} alt="logo"/>
        </div>
      
    </div>
  )
}

export default BrandLogos
