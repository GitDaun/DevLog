import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-[9999]">
      <div className="animate-pulse">
        <Image 
          src="/waiting.webp" 
          alt="Loading..." 
          width={150} 
          height={150} 
          priority
          unoptimized
          className='w-full max-w-[100px] xl:max-w-[300px]'
        />
      </div>
    </div>
  )
}