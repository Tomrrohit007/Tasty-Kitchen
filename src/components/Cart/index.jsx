import {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import CartItem from '../CartItem'
import Footer from '../Footer'
import "./index.css"

const typesList = [
  {id:1, name:"Item"},
  {id:2, name:"Quantity"},
  {id:3, name:"Price"}]

function Cart() {
  let navigate = useNavigate()

  let cartList = []

  const localCartList = localStorage.getItem("cartList")
  if(localCartList!==null){
    cartList = JSON.parse(localCartList)
  }

  const [countQuantity, setQuantity] = useState(0)


  const increBtn=(id)=>{
    cartList = cartList.map(eachCartItem=>{
      if(eachCartItem.id===id){
        const updateCount = eachCartItem.count + 1
        return {...eachCartItem, count:updateCount}
      }
      return eachCartItem
    })
    localStorage.setItem("cartList", JSON.stringify(cartList))
    setQuantity(prev=>prev+1)
  }
  const decreBtn=(id)=>{
    cartList = cartList.map(eachCartItem=>{
      if(eachCartItem.id===id){
        const updateCount = eachCartItem.count - 1
        return {...eachCartItem, count:updateCount}
      }
      return eachCartItem
    })
    localStorage.setItem("cartList", JSON.stringify(cartList))
    setQuantity(prev=>prev+1)
  }

let totalPriceOfCart = 0
for (let i of cartList){
  totalPriceOfCart = totalPriceOfCart + i.cost * i.count
}

const cartItemView = ()=>{
    return <div className='cart-main'>
       <div className='cart-cont'>
        <ul className='types'>
          {typesList.map(each=><li key={each.id} className='type-item' >{each.name}</li>)}
        </ul>
        <ul className='cart-item-list'>
          {cartList.map(eachCartItem=><CartItem eachCartItem={eachCartItem} key={eachCartItem.id} increBtn={increBtn} decreBtn={decreBtn} />)}
        </ul>
        <hr color='#CBD2D9' className='hr' />
        <div className='total-cost-panel'>
            <h1 className='order-total-heading total'>Order Total:</h1>
            <span className='price-total'>
              <h1 className='total-price-of-cart total'>₹  {totalPriceOfCart}.00</h1>
              <button className='checkout-btn' onClick={()=>navigate("/payment")}>Place Order</button>
            </span>
        </div>
        </div>
        <Footer/>
    </div>

  }

  const noItemView = ()=>{
    return <div className='no-item-cart-cont'>
        <img src='https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675845284/cooking_1_arcyxq.svg' alt="" />
        <h1 className='no-order-heading'>No Orders Yet</h1>
        <p className="no-item-cart-para">Your cart is empty. Add something from the menu</p>
        <button className='order-now' onClick={()=>navigate("/")}>Order Now</button>
    </div>
  }
  return (
    <>
      {cartList.length===0?noItemView():cartItemView()}
    </>
  )
}

export default Cart
