import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = () => {
  return (
    <Link href="/" passHref>
      <a style={{ cursor: 'pointer' }}>
        <Image src="/images/ehouse-logo.svg" width={100} height={79} alt="Logo" />
      </a>
    </Link>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo