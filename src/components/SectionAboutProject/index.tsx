import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import type { SectionAboutProjectProps } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionAboutProject = ({
  description,
  image,
  title
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
