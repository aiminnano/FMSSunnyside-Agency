


function Testimony(props){
  return(
    <div className="flex flex-col items-center gap-13 w-full max-w-80 text-center font-semibold text-grey600 max-[720px]:gap-8">
        <img src={props.img} className="rounded-[50%] w-16" alt="person-avatar" />
        <p className="font-barlow">{props.testimony}</p>
        <div className="flex flex-col gap-2">
            <div className="font-fraunces text-grey950 font-black">{props.name}</div>
            <div className="font-barlow text-grey400">{props.jobTitle}</div>
        </div>
    </div>
  )

}

export default Testimony;