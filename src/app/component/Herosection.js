"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination, Autoplay } from "swiper";
import styles from "./Hero.module.css";
console.log(styles);

const Herosection = () => {
    return (
        <Swiper modules={[Pagination, Autoplay]} 
        slidesPerView={1}
        autoplay={{
            delay:2000
        }} className="mySwiper">
             <SwiperSlide>
                <section class="relative bg-[url(https://i.postimg.cc/pVzrmMdC/dark-knight-rises-movie-poster-Herosection-batman.jpg)] bg-cover bg-center bg-no-repeat">
                    <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
                    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-xl font-extrabold sm:text-7xl text-white"> The Dark Knight Rises 
                        </h1>
                        <strong class="block font-extrabold text-rose-700 text-5xl mt-5"> CHAPTER TWO </strong>
                        {/* <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white"> Embark on a epic adventure with the anticipated sequel of The Dark Knight Rises, coming this winter 2023. </p>
                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"> Get Started </a>
                        </div> */}
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section class="relative bg-[url(https://i.postimg.cc/P5s5d4fR/desktop-wallpaper-25-best-and-beautiful-indian-movie-poster-design-ideas-south-indian-movies-banner.jpg)] bg-cover bg-center bg-no-repeat">
                     <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
                    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-xl font-extrabold sm:text-7xl text-white"> Paadmavat
                        </h1>
                        <strong class="block font-extrabold text-rose-700 text-5xl mt-5"> Coming soon </strong>
                        {/* <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white"> Embark on a epic adventure with the anticipated sequel of The Dark Knight Rises, coming this winter 2023. </p>
                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"> Get Started </a>
                        </div> */}
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section class="relative bg-[url(https://i.postimg.cc/6pf2SSV0/4686112993-9583daf5b4-b.jpg)] bg-cover bg-center bg-no-repeat">
                    <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
                    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-xl font-extrabold sm:text-7xl text-white"> Inception 
                        </h1>
                        <strong class="block font-extrabold text-rose-700 text-5xl mt-5"> CHAPTER TWO </strong>
                        {/* <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white"> Embark on a epic adventure with the anticipated sequel of The Dark Knight Rises, coming this winter 2023. </p>
                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"> Get Started </a>
                        </div> */}
                        </div>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    );
};

export default Herosection;