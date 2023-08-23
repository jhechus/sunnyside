import Image from "./Image"

import milkmobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import milkDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'

import orangemobile from '../assets/mobile/image-gallery-orange.jpg'
import orangedesktop from '../assets/desktop/image-gallery-orange.jpg'

import conemobile from '../assets/mobile/image-gallery-cone.jpg'
import conedesktop from '../assets/desktop/image-gallery-cone.jpg'

import sugarmobile from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugardesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'

export default function Gallery() {
  return (
    <div className=" grid grid-cols-2 sm:flex">
      <Image
        imgMobile={milkmobile}
        imgDesktop={milkDesktop}
      />

      <Image
        imgMobile={orangemobile}
        imgDesktop={orangedesktop}
      />

      <Image
        imgMobile={conemobile}
        imgDesktop={conedesktop}
      />

      <Image
        imgMobile={sugarmobile}
        imgDesktop={sugardesktop}
      />

    </div>
  )
}
