import Quill from 'quill'
import "quill/dist/quill.snow.css"
import { useEffect } from 'react'




export default function TextEditor() {
    useEffect(()=>{
      new Quill('#container',{theme:"snow"})
    },[])
    return (<>
        <div id="container"></div>

    </>)



}