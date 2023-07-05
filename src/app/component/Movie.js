"use client"


import Link from "next/link";
import "./Movie.module.css";


import { useState } from "react";
const Movie = (item) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const{id, type, title, synopsis, backgroundImage} = item.jawSummary;
    console.log(item)
    return (
        <div>
             <div className="card card-compact w-96 bg-gray-800 shadow-xl">
                <figure className="">
                    <img src={backgroundImage.url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-red-500">{title}</h2>
                    <p className="text-gray-500 mb-3">{synopsis}</p>
                    <div className="card-actions">
                    <Link href={`/movie/${id}`}><button className="btn bg-red-500 border border-none">Watch Now</button></Link>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Movie;