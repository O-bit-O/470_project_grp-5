import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Home() {
    const [mediCat, setmediCat] = useState([])
    const [mediItems, setmediItems] = useState([])
    const [search, setSearch] = useState('')
    const loadmediItems = async () => {
        let response = await fetch("http://localhost:5000/api/auth/mediData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        });
        response = await response.json()
        // console.log(response[1][0].CategoryName)
        setmediItems(response[0])
        setmediCat(response[1])
    }

    useEffect(() => {
        loadmediItems()
    }, [])

    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                    <div className="carousel-inner " id='carousel'>
                        <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                            <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
                            </div>
                        </div>
                        <div className="carousel-item active" >
                            <img src="https://epsilon.aeon.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/idea_sized-kendal-l4ikccachoc-unsplash.jpg" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/558bc22ce4b0574c94d31c79/1499690882802-HD5D99I6GB6D1QO16YEL/Health+and+Medicine.jpg?format=1500w" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://economictimes.indiatimes.com/thumb/msid-77562369,width-1200,height-900,resizemode-4,imgsize-51396/healthcare.jpg?from=mdr" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'> {/* boootstrap is mobile first */}
                {
                    mediCat !== []
                        ? mediCat.map((data) => {
                            return (
                                // justify-content-center
                                <div className='row mb-3'>
                                    <div key={data.id} className='fs-3 m-3'>
                                        {data.CategoryName}
                                    </div>
                                    <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                                    {mediItems !== [] ? mediItems.filter(
                                        (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                                                    {console.log(filterItems.url)}
                                                    <Card mediName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                                                </div>
                                            )
                                        }) : <div> No Such Data </div>}
                                </div>
                            )
                        })
                        : ""}
            </div>
            <Footer />
        </div>









    )
}
