import React from 'react'

import type { LogoProps } from 'types/api'

import * as S from './styles'

type Props = LogoProps

const Logo = ({ alternativeText, url }: Props) => (
  <S.LogoWrapper src={`http://localhost:1337${url}`} alt={alternativeText} />
)

export default Logo
