import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

function Carausel() {

    const [offerList, setOfferList] = useState([])

    const settings = {
      slidesToShow: 1,
      dots:true,
      slidesToScroll: 1,
      infinite: true,
      autoplay:true,
      autoplaySpeed:2000,
      centerMode: true,
    }

    useEffect(()=>{
        const getOfferList = async ()=>{
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                },
                method: 'GET',
              }
            const response = await fetch("https://apis.ccbp.in/restaurants-list/offers", options)
            const fetchedData = await response.json()
            const {offers} = fetchedData
            const updatedCaseData = offers.map((eachItem)=>({
              id:eachItem.id,
              imageUrl:eachItem.image_url
            })) 
            setOfferList(updatedCaseData)
        }
        getOfferList()

    },[setOfferList])

  return (
    <div className='silder-cont'>
      <Slider {...settings} className="slider" >
      {offerList.map(eachSlide=>
      <div key={eachSlide.id}>
        <img className='slide-item' src={eachSlide.imageUrl}/>
      </div>
      )}
    </Slider>

    </div>
  )
}

export default Carausel