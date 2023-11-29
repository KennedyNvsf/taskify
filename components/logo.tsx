import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const textHeading = localFont({
    src: '../public/fonts/font.woff2'
})

const Logo = () => {

  return (
    <Link href='/'>
        <div
            className='
                hover:opacity-75 transition
                hidden
                items-center md:flex
                gap-x-2
            '
        >
            <Image
                src='/logo.svg'
                width={30}
                height={30}
                alt='Taskify'
            />

            <p className={cn(
                'text-lg text-neutral-700 pb-1',
                textHeading.className
            )}>
                Taskify
            </p>
        </div>
    </Link>
  )
}

export default Logo