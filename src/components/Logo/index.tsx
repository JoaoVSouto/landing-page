import React from 'react'

import type { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Props = LogoProps

const Logo = ({ alternativeText, url }: Props) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
