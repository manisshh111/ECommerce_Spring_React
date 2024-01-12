import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../../Redux/Auth/Action'

const RegisterForm = () => {

    const navigate=useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));
        }
    }, [jwt, auth.jwt]);
    

    //The code inside useEffect will be executed whenever any of the dependencies in the array changes.

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const userData = {
            firstName:data.get("firstName"),
            lastName: data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")

        }
        dispatch(register(userData));
        console.log(userData)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
             required
             id='firstName'
             name='firstName'
             label="First Name"
             fullWidth
             autoComplete='Given Name'
             />
        </Grid>

        <Grid item xs={12} sm={6}>
            <TextField
             required
             id='lastName'
             name='lastName'
             label="Last Name"
             fullWidth
             autoComplete='Given Name'
             />
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
             required
             id='email'
             name='email'
             label="Email"
             fullWidth
             autoComplete='email'
             />
        </Grid>

        <Grid item xs={12} sm={12}>
            <TextField
             required
             id='password'
             name='password'
             label="Password"
             fullWidth
             autoComplete='password'
             />
        </Grid>

        <Grid item xs={12}>
           <Button className='bg-[#9155FD] w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem 0"}} >
            Register
            </Button>
        </Grid>
        </Grid> 

        </form>

        <div>
            <div className='flex justify-center flex-col items-center py-3'>
                <p>If you already have account?</p>
                <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Signin</Button>
                </div>
        </div>
      
    </div>
  )
}

export default RegisterForm
