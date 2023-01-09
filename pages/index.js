import { Center, Grid, GridItem, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Link from "next/link"
import Education from '../components/Education';
export const getStaticProps=async()=>{
  let res=await axios.get(`https://api.github.com/users/SumitPokhriyal5`)
  let data=res.data;

  let res1=await axios.get(`https://api.github.com/search/repositories?q=user:SumitPokhriyal5+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data1=res1.data;

  return {
    props:{
      data,
      data1
    }
  }
}


const Home = ({data,data1}) => {
  const {items}=data1;
  console.log(data1)
  return (
    <Wrap>
    <WrapItem w={'100%'}>
        <Navbar avatar={data.avatar_url}/>  
    </WrapItem>
    <div display={'flex'} flexDirection="row">
      <Profile avatar={data.avatar_url} bio={data.bio} name={data.name} username={data.login}/>
      <Education/>
    </div>
    <div>
      <Center>
      <Heading>Projects</Heading>
      </Center>
    {items.map((item)=>{
          return  <Link key={item.id} href={`/projects/${item.id}`}><Projects url={item.ssh_url} des={item.description} language={item.language} star={item.score} fork={item.forks} /></Link>
        })}
    </div>
    
  </Wrap>
    
  )
}

export default Home