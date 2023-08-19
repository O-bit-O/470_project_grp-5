import React from 'react';
import Delete from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    const navigate = useNavigate();  // Initialize the hook at the top level, not conditionally.

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");

        let response = await fetch("http://localhost:5000/api/auth/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        console.log("JSON RESPONSE:::::", response.status)
        if (response.status === 200) {
            dispatch({ type: "DROP" });
            navigate('/payment'); // Navigate using the useNavigate hook
        }
    }

    let totalPrice = data.reduce((total, medi) => total + medi.price, 0);

    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        )
    }

    return (
        <div>
            {console.log(data)}
            <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
                <table className='table table-hover '>
                    <thead className=' text-success fs-4'>
                        <tr>
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Option</th>
                            <th scope='col' >Amount</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((medi, index) => (
                            <tr key={index}>
                                <th scope='row' >{index + 1}</th>
                                <td >{medi.name}</td>
                                <td>{medi.qty}</td>
                                <td>{medi.size}</td>
                                <td>{medi.price}</td>
                                <td>
                                    <button type="button" className="btn p-0">
                                        <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
                <div>
                    <button onClick={handleCheckOut} className='btn bg-success mt-5'> Check Out </button>
                </div>
            </div>
        </div>
    )
}
