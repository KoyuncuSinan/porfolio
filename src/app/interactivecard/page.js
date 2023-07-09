"use client"
import DesktopInteractive from '@/components/interactiveCard/DesktopInteractive';
import MobileInteractive from '@/components/interactiveCard/MobileInteractive';
import useBetterMediaQuery from '@/components/util/UseBetterMediaQuery'

export default function Home() {
  const isMobile = useBetterMediaQuery("(max-width: 899px)");

  return (
    <main className='w-[85%] umd:w-[70%] mx-auto mt-8 umd:mt-12'>
    {isMobile ? <MobileInteractive />
      :
      <DesktopInteractive />
    }
    </main>
  )
}