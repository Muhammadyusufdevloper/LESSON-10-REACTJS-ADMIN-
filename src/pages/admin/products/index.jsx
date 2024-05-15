import React, { useEffect } from 'react'
import "./Products.scss"
import vector from "../../../assets/Vector.svg"

const Products = () => {
    useEffect(()=>{
        
    },[])
  return (
    <>
    <div className='product'>
        <div className='container'>
            <div className='product__info'>
                <h1 className='product__title'>Products</h1>
                <div className='product__btns'>
                    <button><img src={vector} alt="" /></button>
                    <button>Add</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>End date</th>
                        <th>Profits</th>
                        <th>Losses</th>
                        <th>Phone</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    </>
  )
}

export default Products