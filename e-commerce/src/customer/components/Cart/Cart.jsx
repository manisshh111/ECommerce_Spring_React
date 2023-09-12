import React from 'react'
import CartItem from './CartItem'
import {Button} from '@mui/material'

const Cart = () => {
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
        {[1,1,1,1,1].map((item)=><CartItem/>)}
        </div>

        <div className='cols-span-1 px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

         <div className='border p-4'>
          <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
          <hr />
          <div className='space-y-3 font-semibold p-4'>
              <div className='flow-root pt-3 text-black'>
                <span className='float-left'>Price</span>
                <span className='float-right'>$4697</span>
                
              </div>
              
              <div className='flow-root pt-3'>
                <span className='float-left'>Discount</span>
                <span className='float-right text-green-600'  >$2459</span>
                
              </div>

              <div className='flow-root pt-3'>
                <span className='float-left'>Delivery Charge</span>
                <span className='float-right text-green-600'>$0</span>
                
              </div>

              <div className='flow-root pt-3'>
                <span className='float-left'>Total Amount</span>
                <span className='float-right text-green-600'>$1278</span>
                
              </div>
              
          </div>
          <Button variant="content" className='w-full' sx={{px:"2rem", py:"1rem", mt:"2rem", bgcolor:"#9155fd"}}>
                Checkout
          </Button>
         </div>

        </div>

      </div>
    </div>
  )
}

export default Cart
