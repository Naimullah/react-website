import React, { useContext } from 'react'
import Layout from '../common/Layout'
import {useForm} from 'react-hook-form'
import { apiUrl } from '../common/http';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuth';
const Login = () => {
    // const {login}=useContext(AdminAuthContext)
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();
    const navigate=useNavigate();
    const onSubmit = async (data) => {
        try {
            console.log(data);
    
            const res = await fetch(`${apiUrl}/admin/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const result = await res.json(); // Convert response to JSON
    
            if (res.ok) { // Check HTTP response status
                const adminInfo = {
                    token: result.token,
                    id: result.id,
                    name: result.name
                };
                localStorage.setItem('adminInfo', JSON.stringify(adminInfo));
                // login(adminInfo)
                navigate('/admin/dashboard');
            } else {
                toast.error(result.message || "Login failed");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };
    // const onSubmit=async (data)=>{
    //     console.log(data)
    //     const res=  await fetch(`${apiUrl}/admin/login`,{
    //         method: 'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     }).than(res=>res.json())
    //     .than(result=>{
    //         console.log(result)
    //         if(result.status==200){
    //             const adminInfo={
    //                 token:result.token,
    //                 id:result.id,
    //                 name:result.name
    //             }
    //             localStorage.setItem('adminInfo',JSON.stringify(adminInfo))
    //             navigate('/admin/dashboard')
    //         }
    //         else
    //         {
    //             // toast.error(result.message);
    //             toast.error(result.message)
    //         }
    //     })
    // }
  return (
    <Layout>
        <div className="container d-flex justify-content-center py-5">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card shadow border-0 login">
                <div className="card-body p-4">
                    <h3>Admin Login</h3>
                    <div className="mb-3">
                        <label htmlFor="" className='form-label'>Email</label>
                        <input type="text"
                        {
                            ...register('email',{
                                required: "The email field is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                } 
                            })
                        } 
                        className={`form-control ${errors.email && 'is-invalid' }`} placeholder='Email'/>
                        {
                            errors.email && <p className='invalide-feedback'> {errors.email?.message}</p>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className='form-label'>Password</label>
                        <input
                        {
                            ...register("password",{
                                required: "The Password field is required"
                            })
                        }
                        type="password" className={`form-control ${errors.password && 'is-invalid' }`} placeholder='Password'/>
                         {
                            errors.password && <p className='invalide-feedback'> {errors.password?.message}</p>
                        }
                    </div>
                    <button className='btn btn-secondary'> Login</button>
                </div>
            </div>
            </form>
        </div>
    </Layout>
  )
}

export default Login
