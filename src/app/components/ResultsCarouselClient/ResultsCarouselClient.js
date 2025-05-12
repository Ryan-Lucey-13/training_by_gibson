'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './ResultsCarouselClient.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { attributes as resultsAttributes } from '../../../content/results.md';

export default function ResultsCarouselClient() {
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
          {resultsAttributes.reviews.map((review, index) => (
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