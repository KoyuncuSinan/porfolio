"use client"
import QuickplateDesktopDisplay from '@/components/quickplate/QuickplateDesktopDisplay';
import QuickplateMobileDisplay from '@/components/quickplate/QuickplateMobileDisplay';
import useBetterMediaQuery from '@/components/util/UseBetterMediaQuery'

export default function Home() {
  const isMobile = useBetterMediaQuery("(max-width: 899px)");

  return (
    <main className='w-[85%] umd:w-[70%] mx-auto mt-8 umd:mt-12'>
    {isMobile ? <QuickplateMobileDisplay />
      :
      <QuickplateDesktopDisplay />
    }
    </main>
  )
}
