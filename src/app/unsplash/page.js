"use client"
import UnsplashDesktop from '@/components/unsplash/UnsplashDesktop';
import UnsplashMobile from '@/components/unsplash/UnsplashMobile';
import useBetterMediaQuery from '@/components/util/UseBetterMediaQuery'

export default function Home() {
  const isMobile = useBetterMediaQuery("(max-width: 899px)");

  return (
    <main className='w-[85%] umd:w-[70%] mx-auto mt-8 umd:mt-12'>
    {isMobile ? <UnsplashMobile />
      :
      <UnsplashDesktop />
    }
    </main>
  )
}
