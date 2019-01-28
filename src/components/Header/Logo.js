import React from 'react'
import { Image } from 'semantic-ui-react'

import zazou from '../../images/logo-carre-2.png'

const Logo = () => (
  <Image
    size="mini"
    src={zazou}
    style={{ marginRight: '1.5em' }}
    alt="I love Lamp"
  />
)

export default Logo
