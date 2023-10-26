'use client'

import {
  IMAGE_HEIGHT_DEFAULT,
  IMAGE_WIDTH_DEFAULT,
  imageUrl,
} from '@/constants'
import { isEmpty } from '@/utils'
import Image from 'next/image'
import { memo, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITTImageProps {
  src: string
  width?: number
  height?: number
  alt?: string
  className?: string
  unoptimized?: boolean
  lazy?: boolean
  priority?: boolean
}

const TTImage = ({
  src = imageUrl.default,
  alt = '',
  className = '',
  height = IMAGE_HEIGHT_DEFAULT,
  width = IMAGE_WIDTH_DEFAULT,
  unoptimized = false,
  priority = false,
  lazy = true,
}: ITTImageProps): JSX.Element => {
  const classes = twMerge('aspect-[4/3] object-contain', className)

  const [photo, setPhoto] = useState<string>(src)

  useEffect(() => {
    isEmpty(src) ? setPhoto(imageUrl.default) : setPhoto(src)
  }, [src])

  return (
    <Image
      src={photo}
      alt={alt}
      width={width}
      height={height}
      unoptimized={unoptimized}
      loading={lazy ? 'lazy' : 'eager'}
      priority={priority}
      className={classes}
      onError={(): void => setPhoto(imageUrl.logo)}
    />
  )
}

export default memo(TTImage)
