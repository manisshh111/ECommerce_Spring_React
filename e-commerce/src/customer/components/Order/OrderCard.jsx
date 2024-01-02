import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='mt-10'>
      
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer' >
             <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" alt="" />
             
             <div className='ml-5 space-y-2'>
                <p>Men Printed Cotton Blend Straight Kurta</p>
                <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
             </div>
            </div>
        </Grid>
        
        <Grid item xs={2}>
            <p > ₹1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && 
        <p>
          <AdjustIcon/>
            <span>Delivered on March 03.</span>
        </p>

          }
          {false && <p>
            <span>
              Expected Delivery on Mar 03
            </span>
            </p>}
        </Grid>


      </Grid>

    </div>
  )
}

export default OrderCard
