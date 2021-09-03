import React,{useState} from 'react'
import Producto from './Producto'

const Form = () => {
    let [total, setTotal] = useState(0)
    const [producto, setProducto] = useState({})
    const [productos, setProductos] = useState([])
    const [list, setList] = useState([
        {id: 1, producto: 'Manzanas', precio: 0.50},
        {id: 2, producto: 'Huevos (c/u)', precio: 0.15},
        {id: 3, producto: 'Jamon (lb.)', precio: 1.25},
        {id: 4, producto: 'Pollo (lb.)', precio: 2.50},
        {id: 5, producto: 'Zananhorias', precio: 0.30},
        {id: 6, producto: 'Tomates', precio: 0.20},
        {id: 7, producto: 'Papas (lb.)', precio: 0.75},
        {id: 8, producto: 'Limones', precio: 0.25},
        {id: 9, producto: 'Mangos', precio: 0.35},
        {id: 10, producto: 'Sandías', precio: 1.00}
    ])

    const handleChange = e => {
        if (e.target.value!=0) {
            setProducto({
                id: list[e.target.value-1].id,
                producto: list[e.target.value-1].producto,
                precio: list[e.target.value-1].precio,
                cantidad: 1,
                total: list[e.target.value-1].precio
            })
        }else{
            setProducto({})
        }
    }

    const handleClick = e => {
        if (Object.keys(producto).length === 0) {
            alert('Seleccione un producto')
            return
        }
        else {
            let repetido=0;
            productos.map((data) =>{
                if(data.id == producto.id){
                    repetido = 1;
                }
            });
            if (repetido == 0) {
                setProductos([...productos, producto])

                const totales = productos.map(value => value.total)
                const sumaTotal = totales.reduce((a, b) => a + b, 0);

                setTotal(sumaTotal + producto.precio)
                
            }
            else{
                alert('Este producto ya fue agregado')
                return
            }
        }
        
    }

    const deleteProducto = indice => {
        const newProductos = [...productos]
        newProductos.splice(indice,1)
        setProductos(newProductos)

        const totales = newProductos.map(value => value.total)
        const sumaTotal = totales.reduce((a, b) => a + b, 0);

        setTotal(sumaTotal)
    }

    const calcular = (valor, indice) => {
        const newProductos = [...productos]
        newProductos[indice].cantidad = valor
        newProductos[indice].total = newProductos[indice].precio*valor
        setProductos(newProductos)

        const totales = productos.map(value => value.total)
        const sumaTotal = totales.reduce((a, b) => a + b, 0);

        setTotal(sumaTotal)
    }

    return (
        <>
        <br />
            <form className="form-group" onSubmit={e => e.preventDefault() }>
                <div className="row">
                    <div className="col-md-6">
                        <select className="form-control" name="producto" onChange={handleChange}>
                            <option value="0">Agregar elemento</option>
                            {list.map(value =>
                                <option value={value.id}>{value.producto}</option>
                            )};
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input type="button" className="btn btn-secondary btn-block form-control" onClick={handleClick} value="Agregar"/>
                    </div>
                </div>
            </form>
            {
                productos.map((value, index) => (
                <Producto 
                    producto={value.producto}
                    precio={value.precio} 
                    index={index} 
                    cantidad={value.cantidad}
                    calcular={calcular}
                    deleteProducto={deleteProducto} 
                /> ))
            }
            <br />
            <h5 style={{textAlign:"end"}} className="text-right">Total: ${total.toFixed(2)}</h5>
        </>
    )
}
export default Form

