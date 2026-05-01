import Testimony from "./Testimony";
import persons from "../persons.js";

function CreateTestimony(info){
    return(
        <Testimony
            key = {info.id}
            img = {info.image}
            testimony = {info.testimonials}
            name = {info.name}
            jobTitle = {info.title}
        />


    )
}


function Testimonials(){
    return (
        <> 
            <div className='grid place-items-center'>
                <div className="pt-40 pb-40 flex flex-col items-center gap-18 max-[720px]:gap-15 max-[720px]:pt-16 max-[720px]:pb-20">
                    <div className="uppercase font-fraunces text-xl text-grey400 font-black tracking-[.25em] max-[720px]:text-base">Client Testimonials</div>
                    <div className="flex items-center justify-center gap-8 max-[720px]:flex-col max-[720px]:gap-16">
                        {persons.map(CreateTestimony)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;