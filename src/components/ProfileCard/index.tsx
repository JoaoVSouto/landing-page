import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import type { SocialLink } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type Image = {
  url: string
  alternativeText: string
}

type Props = {
  name: string
  role: string
  image: Image
  socialLinks: SocialLink[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card>
    <S.Image
      src={getImageUrl(image.url)}
      alt={image.alternativeText}
      loading="lazy"
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
          >
            {icons[item.title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
