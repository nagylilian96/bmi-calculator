import React,{useState} from 'react'

export const Toggle=()=>{
    const [isHappy,setIsHappy]=useState(true)

    let myStyle={
        backgroundColor: isHappy ? 'dodgerblue' : 'red',
        padding:'1rem',
        margin: '1rem',
        color:'white'
    }

    return(
        <section>
            <button style={myStyle} onClick={()=>setIsHappy(!isHappy)}>Are you happy with our page ?{isHappy ? '🙂' :'😥'}</button>
        </section>
    )
}