import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full photo1">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                    <div className=' flex justify-center items-center text-center'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl text-white font-bold mb-3'>Welcome To Digital-Comp LTD.</h1>
                        <p className='text-white'>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                        <Link to='/category'> <button className="btn btn-outline btn-secondary mt-3">See-Categories</button></Link>     
                        </div>
                        
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full photo2 ">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                    <div className=' flex justify-center items-center text-center'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl text-white font-bold mb-3'>Welcome To Digital-Comp LTD.</h1>
                        <p className='text-white'>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                      <Link to='/category'> <button className="btn btn-outline btn-secondary mt-3">See-Categories</button></Link> 

                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full photo3">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                    <div className=' flex justify-center items-center text-center'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl text-white font-bold mb-3'>Welcome To Digital-Comp LTD.</h1>
                        <p className='text-white'>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                        <Link to='/category'> <button className="btn btn-outline btn-secondary mt-3">See-Categories</button></Link> 
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
          
            {/* <Categories></Categories> */}
        </div>
    );
};

export default Home;