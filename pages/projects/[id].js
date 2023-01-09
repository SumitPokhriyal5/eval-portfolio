import axios from 'axios'
import React from 'react'

export const getStaticPaths=async()=>{
    let res=await axios.get(`https://api.github.com/search/repositories?q=user:SumitPokhriyal5+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data=res.data;

    const paths=data.map((el)=>{
        return {
            params:{
                id:el.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false, 
      }
}
export const getStaticProps=async(context)=>{
    const id=context.params.id;
    let res=await axios.get(`https://api.github.com/search/repositories?q=user:SumitPokhriyal5+fork:true&sort=updated&per_page=10&type=Repositories/${id}`)
    let data=res.data;

    return {
        props:{
            data
        }
    }
}

const SingleProject = ({data}) => {
    console.log(data)
  return (
    <div>SingleProject</div>
  )
}

export default SingleProject