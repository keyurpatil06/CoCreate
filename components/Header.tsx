import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
      <Link href='/' className='md:flex-1'>
        <div className='flex items-center w-fit'>
          <Image
            src='/assets/icons/logo-icon.svg'
            alt='logoWithName'
            width={46}
            height={32}
            className='hidden md:block'
          />
          <span className='font-semibold text-lg hidden md:block'>CoCreate</span>
        </div>
        <Image
          src='/assets/icons/logo-icon.svg'
          alt='logo'
          width={64}
          height={32}
          className='mr-2 md:hidden'
        />
      </Link>
      {children}
    </div>
  )
}

export default Header
