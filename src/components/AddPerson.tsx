import React, {useState } from "react"

export interface AddPersonProps{
    handleAddPersonSubmit:(person:{firstName:string,lastName:string})=> void;
}
export const AddPerson=(props:AddPersonProps)=>{
    const [firstName,setFirstName]=useState<string>("");
    const [lastName,setLastName]=useState<string>("");
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        props.handleAddPersonSubmit({"firstName":firstName,"lastName":lastName});
    
    }

    return(
        <div className="mt-4">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input placeholder="First name" onChange={(event)=>setFirstName(event.target.value)}/>
                <input placeholder="Last name"  onChange={(event)=>setLastName(event.target.value)}/>
                <button type='submit' onClick={handleSubmit}>Add Client</button>
            </form>
        </div> 
    )
}