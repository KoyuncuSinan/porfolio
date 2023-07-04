import Image from 'next/image'
import picture from "../../public/image.jpg"
export default function Home() {
  return (
    <main className='w-[70%] mx-auto mt-20'>
      <section className='grid grid-cols-2 text-black items-center'>
        <div className='col-span-1 mx-auto'>
          <h3 className='text-[#FDC435] uppercase font-bold text-xl'>Full-stack Web Developer</h3>
          <h2 className='font-bold text-[4rem] leading-[120%]'>Hello, my name is Sinan Koyuncu</h2>
          <p>I'm a full-stack web developer who's experienced in Node.js, React and Next.js</p>
          <div className='mx-auto flex flex-row justify-start mt-[2rem] '>
            <button className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg'>Projects</button>
            <button className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black'>LinkedIn</button>
          </div>
        </div>
        <Image src={picture} width={800} height={800} className="mx-auto rounded-full w-[60%]" ></Image>
      </section>
    </main>
  )
}
