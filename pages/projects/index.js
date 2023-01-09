import axios from 'axios'
import React from 'react'
import Projects from '../../components/Projects';
import Link from 'next/link';

export const getStaticProps=async()=>{
    let res=await axios.get(`https://api.github.com/search/repositories?q=user:SumitPokhriyal5+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data=res.data;

    return {
        props:{
            data
        }
    }
}
const ProjectPage = ({data}) => {
    const {items}=data;
    console.log(items)

  return (
    <div>
        {items.map((item)=>{
          return  <Link key={item.id} href={`/projects/${item.id}`}><Projects url={item.ssh_url} des={item.description} language={item.language} star={item.score} fork={item.forks} /></Link>
        })}
    </div>
  )
}

export default ProjectPage