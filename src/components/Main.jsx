import imgmobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

function Main() {
  return (
    <section>
        <picture >
            <source media='(max-width: 640px)' srcSet={imgmobile} />
            <source  media='(min-width: 641px)' srcSet={imgDesktop} />
            <img src={imgmobile} alt="background header" />
        </picture>
        <p className=' absolute w-[350px] text-[40px] uppercase tracking-[6.20px] text-white text-center top-[144px] left-0 right-0 mx-auto
        sm:w-[600px] '>  We are creatives </p>
        <img className=' absolute top-[300px] left-0 right-0 mx-auto ' src={arrow} alt="flecha" />
        
    </section>
  )
}

export default Main
