import Logo from '../../images/logo.svg?react'
import headerImg from '../../images/desktop/image-header.jpg'
import arrowDown from '../../images/icon-arrow-down.svg'
import Hamburger from '../../images/icon-hamburger.svg?react'
import mobileHeaderImg from '../../images/mobile/image-header.jpg'
import { useState } from 'react'

function Header() {
    console.log(headerImg);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        
        
        <header className='relative grid place-items-center '>
            <div className='relative box-border w-full max-w-360 aspect-[1400/778] max-[720px]:aspect-[720/1032]'>
                <div><img src={headerImg} className='hidden min-[720px]:block absolute top-0 left-0 z--2 bg-center ' alt="orange-header" /></div>
                <img src={mobileHeaderImg} className='min-[720px]:hidden absolute top-0 left-0 z--2 bg-center' alt="" />
                <div className='relative z-1 flex items-center justify-between max-[450px]:pt-8 p-5 md:p-10 w-full max-w-full'>
                    <div className='w-full max-w-[200px] max-[450px]:max-w-[120px]'><Logo className='text-[#ffffff] w-full' /></div>
                    <div className='hidden md:flex text-white gap-15 items-center'>
                        <div className='flex font-barlow gap-15 font-medium text-lg'>
                            <div className='cursor-pointer hover:text-grey950'>About</div>
                            <div className='cursor-pointer hover:text-grey950'>Services</div>
                            <div className='cursor-pointer hover:text-grey950'>Projects</div>
                        </div>
                        <div>
                            <button className='font-fraunces uppercase cursor-pointer hover:bg-button-hover font-bold bg-white text-black pt-4 pr-7 pb-4 pl-7 rounded-4xl'>Contact</button>
                        </div>
                    </div>
                    <div className='md:hidden flex flex-col items-end justify-center'>
                        <Hamburger className='cursor-pointer text-white hover:text-grey600' onClick={() => setIsOpen(!isOpen)} alt="hamburger-icon" />
                        <div className={` ${isOpen ? 'block' : 'hidden'} dropdown box-border absolute top-26 flex flex-col items-center w-[calc(100%-40px)] gap-5 pt-9 pb-9 font-semibold text-grey550 bg-white font-barlow`}>
                       
                            <div className='cursor-pointer hover:text-grey950'>About</div>
                            <div className='cursor-pointer hover:text-grey950'>Services</div>
                            <div className='cursor-pointer hover:text-grey950'>Projects</div>
                            <button className='font-fraunces uppercase cursor-pointer hover:bg-yellowlight font-bold bg-yellow text-black pt-4 pr-7 pb-4 pl-7 rounded-4xl'>Contact</button>
                        </div>
                    </div> 
                </div>
                
                <div className='relative z--1 flex flex-col items-center gap-[2rem] 2xl:gap-[6rem] xl:gap-[6rem] max-[768px]:gap-[2.3rem] mt-[clamp(2rem,5vw,4rem)] max-[720px]:mt-[clamp(4.25rem,19vw,10rem)]'>
                    <div className='uppercase text-center text-[clamp(2rem,3.5vw,3.2rem)] font-black font-fraunces text-white tracking-[.2em] max-[768px]:text-[2.4rem]'>We are creatives</div>
                    <div><img src={arrowDown} className="w-[clamp(1.5rem,2.56vw,2rem)] max-[768px]:w-[2.1rem]" alt="arrow-down" /></div>
                </div>   
            </div>
        </header>
        </>
    )
}

export default Header;