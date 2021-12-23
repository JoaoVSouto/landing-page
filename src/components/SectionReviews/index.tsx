import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import type { SectionReviewsProps } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = ({ reviews, title }: SectionReviewsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.name}
            id={index}
            name={review.name}
            image={getImageUrl(review.photo.url)}
            description={review.text}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
