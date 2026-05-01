import milkbottles from '../../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../../images/desktop/image-gallery-orange.jpg'
import cone from '../../images/desktop/image-gallery-cone.jpg'
import sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg'

function Gallery(){
    return (
        <> 
        <div className='grid place-items-center'>
            <div className='grid place-items-center grid-cols-4 max-[720px]:grid-cols-2  overflow-hidden '>
                <div className='flex items-center w-full max-w-[360px] max-[375px]:h-[180px] overflow-hidden'><img src={milkbottles} className='' alt="" /></div>
                <div className='flex items-center w-full max-w-[360px] max-[375px]:h-[180px] overflow-hidden'><img src={orange} className='' alt="" /></div>
                <div className='flex items-center w-full max-w-[360px] max-[375px]:h-[180px] overflow-hidden'><img src={cone} className='' alt="" /></div>
                <div className='flex items-center w-full max-w-[360px] max-[375px]:h-[180px] overflow-hidden'><img src={sugarcubes} className='' alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default Gallery;