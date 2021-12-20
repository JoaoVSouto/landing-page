import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import type { SectionModulesProps } from 'types/api'

import * as S from './styles'

const SectionModules = ({ modules, title }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ description, subtitle, title }) => (
        <CardModule
          key={`${title}-${subtitle}`}
          title={title}
          subTitle={subtitle}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
