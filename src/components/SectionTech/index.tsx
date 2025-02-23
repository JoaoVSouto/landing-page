import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import type { SectionTechProps } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionTech = ({ techIcons, title }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ icon, title }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
