import React,{useState, useEffect } from 'react'
const Producto = ({producto, precio, index, cantidad, calcular, deleteProducto}) => {
    const handleChange2 = e => {
        calcular(e.target.value, index)
    }
    return (
        <>
        <br /><br />
        <div className="row" style={{fontSize:"18px"}}>
            <p>{producto}</p>
            <div className="col-md-6">
                <p style={{paddingTop:"10px"}}>${precio.toFixed(2)}</p> 
            </div>
            <div className="col-md-6">
                <input type="number" name="cantidad" onChange={handleChange2} value={cantidad} min="1" />
                <input style={{margin:"5px"}} type="button" className="btn btn-secondary btn-block" onClick={() => deleteProducto(index)} value="x"/>
            </div>
        </div>
        <div style={{backgroundColor:"black", padding:"1px"}}></div>
        </>
    )
}
export default Producto