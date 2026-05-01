import egg from '../../images/desktop/image-transform.jpg'
import cup from '../../images/desktop/image-stand-out.jpg'
import cherry from '../../images/desktop/image-graphic-design.jpg'
import orange from '../../images/desktop/image-photography.jpg'

function Features(){
    return (
        <>  <div className='grid place-items-center'>
                <div className="relative w-full max-w-[1440px] grid grid-cols-2 grid-rows-3 max-[720px]:grid-cols-1 max-[720px]:grid-rows-[auto_auto_auto_auto_580px_580px]">
                    <div className='flex items-center justify-center w-full max-[720px]:order-2'>
                        <div className='w-[55.5%] max-w-[400px] max-[720px]:w-full max-[720px]:max-w-[300px] flex flex-col gap-[clamp(1rem,2vw,2rem)] max-[720px]:gap-8 max-[720px]:pt-15 max-[720px]:pb-15'>
                            <div className='font-fraunces font-black text-[clamp(1.5rem,2.5vw,1.875rem)] max-[720px]:text-3xl max-md:text-center'>Transform your brand</div>
                            <p className='font-barlow max-md:text-center text-[clamp(.8rem,1.35vw,1rem)] max-[720px]:text-base'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                            <div className='relative'>
                                <div className='uppercase relative z-1 font-fraunces font-black max-md:text-center text-[clamp(.8rem,1.35vw,1rem)] max-[720px]:text-base'>Learn more</div>
                                <div className='absolute top-3.5 z--1 bg-yellowlight -left-2.5 p-1.5 bg-black rounded-lg w-33.5 max-md:top-[80%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-[720px]:order-1'><img src={egg} alt="" /></div>
                    <div className='max-[720px]:order-3'><img src={cup} alt="" /></div>
                    <div className='flex items-center justify-center w-full max-[720px]:order-4'>
                        <div className='w-[55.5%] max-w-[400px] max-[720px]:w-full max-[720px]:max-w-[300px] flex flex-col gap-[clamp(1rem,2vw,2rem)] max-[720px]:gap-8 max-[720px]:pt-15 max-[720px]:pb-15'>
                            <div className='font-fraunces font-black text-[clamp(1.5rem,2.5vw,1.875rem)] max-[720px]:text-3xl max-md:text-center'>Stand out to the right audience</div>
                            <p className='font-barlow max-md:text-center text-[clamp(.8rem,1.35vw,1rem)] max-[720px]:text-base'>Using collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                            <div className='relative'>
                                <div className='uppercase relative z-1 font-fraunces font-black max-md:text-center text-[clamp(.8rem,1.35vw,1rem)] max-[720px]:text-base'>Learn more</div>
                                <div className='absolute top-3.5 z--1 bg-red -left-2.5 p-1.5 bg-black rounded-lg w-33.5 max-md:top-[80%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-end justify-center max-[720px]:order-5 overflow-hidden'>
                        <img src={cherry} className='h-full object-cover' alt="" />
                        <div className='absolute flex flex-col items-center gap-[clamp(.5rem,1.7vw,1.5rem)] max-[720px]:gap-6 z-999 text-darkgreen w-[62.5%] max-w-[330px] max-[720px]:w-full max-[720px]:max-w-[330px] pb-[clamp(2rem,4.5vw,3.75rem)] max-[720px]:pb-15'>
                            <div className='font-fraunces text-[clamp(1.2rem,2.4vw,1.73rem)] max-[720px]:text-[1.73rem] font-black text-center'>Graphic Design</div>
                            <div className='font-barlow font-semibold text-center text-[clamp(.8rem,1.35vw,1rem)] max-[720px]:text-base'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</div>
                        </div>    
                    </div>
                    <div className='relative flex items-end justify-center w-full max-[720px]:order-6 overflow-hidden'>
                        <img src={orange} className='h-full object-cover' alt="" />
                        <div className='absolute flex flex-col items-center gap-[clamp(.5rem,1.7vw,1.5rem)] max-[720px]:gap-6 z-999 text-darkblue w-[62.5%] max-w-[330px] max-[720px]:w-full max-[720px]:max-w-[330px] pb-[clamp(2rem,4.5vw,3.75rem)] max-[720px]:pb-15'>
                            <div className='font-fraunces text-[clamp(1.2rem,2.4vw,1.73rem)] max-[720px]:text-[1.73rem] font-black'>Photograpy</div>
                            <div className='font-barlow font-semibold text-center text-[clamp(.8rem,1.35vw,1rem)] max-[720px]:text-base'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
                        </div> 
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Features;