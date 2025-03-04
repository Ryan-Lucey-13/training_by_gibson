'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './ResultsCarouselClient.module.css';
import { Navigation, Pagination } from 'swiper/modules';

export default function ResultsCarouselClient() {
  const reviews = [
    {
      name: 'Gibson',
      location: 'New York',
      review: 'I had almost given up hope that I would ever return to pre-pregnancy body... luckily I did not give up. Gibson helped me get back to my pre-pregnancy weight and put on more strength and muscle than I ever had. I feel great and have so much energy to spend with my 2 little ones. Gibson made exercise fun and enjoyable, which really helped me stay consistent.',
    },
    {
      name: 'Jane Smith',
      location: 'Manhattan',
      review: 'I love the personalized approach to training. Great experience!',
    },
    {
      name: 'Alice Johnson',
      location: 'Brooklyn',
      review: 'Amazing results! The workouts were challenging but effective.',
    },
    {
      name: 'Bob Brown',
      location: 'Chicago',
      review: 'I feel stronger and more confident thanks to this program!',
    },
  ];

  return (
    <div className={styles.TBGHomeResultsSection}>
      <h1>Success Stories</h1>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.SwiperContainer}
        >
          {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div>
              <h4>"{review.review}"</h4>
              <p>{review.name}</p>
              <p>{review.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}