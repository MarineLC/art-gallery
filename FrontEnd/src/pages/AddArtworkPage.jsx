
import { useEffect, useState } from "react"

const GalleryPage =() => {
const [arts, setArts]= useState([])


const fetchArts = async () => {
    try{
const response = await fetch('http://localhost:4000/data')
if(response.ok){

    const artsData = await response.json()
}
    }catch(error){
        console.log(error)
    }

useEffect(() => {
    fetchArts()

}, [])

}

return(
    <>
    
        <h1>All the datas</h1>
<ul>
    {arts.map(art => (
        <li key ={art.id}>{art.title}</li>
    ))}
</ul>

    </>


)





} 