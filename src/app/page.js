"use client"
import MobileHome from '@/components/homepage/MobileHome';
import useBetterMediaQuery from '@/components/util/UseBetterMediaQuery'
import DesktopHome from '@/components/homepage/DesktopHome';

export default function Home() {
  const isMobile = useBetterMediaQuery("(max-width: 899px)");

  return (
    <main className='w-[85%] umd:w-[70%] mx-auto mt-20'>
    {isMobile ? <MobileHome />
      :
      <DesktopHome />
    }
    </main>
  )
}
