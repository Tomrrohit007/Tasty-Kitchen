import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

const offerList = [
  {
      "id": 1,
      "imageUrl": "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg"
  },
  {
      "id": 2,
      "imageUrl": "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-rajasthani-special.jpg"
  },
  {
      "id": 3,
      "imageUrl": "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-uttar-pradesh-special.jpg"
  },
  {
      "id": 4,
      "imageUrl": "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-north-indian-special.jpg"
  }
]

function Carausel() {

    const settings = {
      slidesToShow: 1,
      dots:true,
      slidesToScroll: 1,
      infinite: true,
      autoplay:true,
      autoplaySpeed:2000,
      centerMode: true,
    }

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