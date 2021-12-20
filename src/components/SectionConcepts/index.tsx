import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import type { SectionConceptsProps } from 'types/api'

import * as S from './styles'

const SectionConcepts = ({ concepts, title }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((item) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
