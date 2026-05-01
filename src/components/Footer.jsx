import Facebook from '../../images/icon-facebook.svg?react'
import Instagram from '../../images/icon-instagram.svg?react'
import Twitter from '../../images/icon-twitter.svg?react'
import Pinterest from '../../images/icon-pinterest.svg?react'
import Logo from '../../images/logo.svg?react'


function Footer(){
    return (
        <>
            <div className="grid place-items-center bg-green500">
                <div className='grid place-items-center gap-15 mt-18 mb-18'>
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <div className='w-[160px] max-[720px]:w-[180px]'><Logo className='text-[#25564b]'/></div>
                        <div className='flex gap-10 font-barlow font-semibold text-medium text-green800'>
                            <div className='hover:text-white cursor-pointer'>About</div>
                            <div className='hover:text-white cursor-pointer'>Services</div>
                            <div className='hover:text-white cursor-pointer'>Projects</div>
                        </div>
                    </div>    
                    <div className='flex items-center justify-center gap-6'>
                        <Facebook className='text-[#2C7566] hover:text-[#ffffff] cursor-pointer' />
                        <Instagram className='text-[#2C7566] hover:text-[#ffffff] cursor-pointer' />
                        <Twitter className='text-[#2C7566] hover:text-[#ffffff] cursor-pointer' />
                        <Pinterest className='text-[#2C7566] hover:text-[#ffffff] cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;