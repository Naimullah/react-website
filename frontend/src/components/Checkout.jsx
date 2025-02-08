import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import ProductImg from "../assets/images/Mens/six.jpg"

const Checkout = () => {
    const [paymentMethod, setPaymentMethod]=useState('cod')
    const handlePamentMethod =(e)=>{
        setPaymentMethod(e.target.value)
    }
  return (
    <Layout>
      <div className="container pb-5">
        <div className="row">
        <div className="col-md-12">
                <nav aria-label="breadcrumb" className='py-4'>
                    <ol className="breadcrumb">
                        <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                        <li className='breadcrumb-item ' aria-current="page">Checkout</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-md-7 ">
                <h3 className='border-bottom pb-3'>Billing Details</h3>
                <form action="">
                    <div className="row pt-3">
                        <div className="col-md-6">
                          <div className="mb-3">
                           <input type="text" className='form-control' placeholder='Name' />

                          </div>
                         </div>
                        <div className="col-md-6">
                             <div className="mb-3">
                              <input type="email" className='form-control' placeholder='Email' />
                             </div>
                        </div>
                        <div className="mb-3">
                            <textarea name="" id="" className='form-control' row={3} placeholder="Address"></textarea>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                           <input type="text" className='form-control' placeholder='City' />

                          </div>
                         </div>
                        <div className="col-md-6">
                             <div className="mb-3">
                              <input type="text" className='form-control' placeholder='State' />
                             </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                           <input type="text" className='form-control' placeholder='Zip' />

                          </div>
                         </div>
                        <div className="col-md-6">
                             <div className="mb-3">
                              <input type="email" className='form-control' placeholder='Mobile' />
                             </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-5">
            <h3 className='border-bottom pb-3'>Item</h3>
                 
                  <table className="table">
                    <tbody>
                        <tr>
                            <td width={100}>
                                <img src={ProductImg} width={100} alt="" />
                            </td>
                            <td width={600}>
                                    <h4>Dummy Product Title</h4>
                                <div className='d-flex align-items-center pt-3'>
                                    <span>$10</span>
                                    <div className='ps-3'>
                                    <button className='btn btn-size'>s</button>
                                    </div>
                                    <div className='ps-3'> x 1</div>
                                </div>
                            </td>
                         
                            
                        </tr>
                    </tbody>
                </table>

                    <div className='row '>
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between border-bottom pb-3">
                                <div>Subtotal</div>
                                <div>$20</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-3">
                                <div>Shipping</div>
                                <div>$20</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-3">
                                <div><strang> Grand Total</strang>
                                    </div>
                                <div>$20</div>
                            </div>
                               
                        </div>
                    </div>

                    <h3 className='border-bottom pt-4 pb-3'>Payment Method</h3>
                    <div>
                        <input type="radio" onClick={handlePamentMethod}
                        value={'stripe'} checked={paymentMethod=='stripe'} />
                        <label htmlFor="" className='form-label ps-3'>Stripe</label>
                        <input type="radio" onClick={handlePamentMethod} className='ms-3' value={'cod'} hecked={paymentMethod=='cod'} />
                        <label htmlFor="" className='form-label ps-3'>COD</label>
                    </div>
                    <div className="d-flex  py-3"> 
                        <button className='btn btn-primary'>Pay now</button>
                    </div>

            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
