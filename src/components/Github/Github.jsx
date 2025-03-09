import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [RepoData, setRepoData] = useState([])
    const data = useLoaderData()

    async function repoDataURL() {
      
      await fetch("https://api.github.com/users/rahuldurge99/repos")
        .then((res) => res.json())
        .then(
          (result) => {
            const list = result.map((item) => (
              <div className="text-center">
                <a target="_blank" href={item.svn_url}>
                  {item.name}
                </a>
              </div>
            ));
            setRepoData(list);
          },
          (error) => {
            console.log(error);
          }
        );
    }



  return (
    <>
    <div className='text-center m-4 text-black bg-gray-100 p-4 text-3xl'
    >Github followers : {data.followers} </div>

    <div className='text-center m-4 text-black bg-gray-100 p-4 text-3xl'
    >Github following : {data.following} </div>

     <img className='align-middle' src ={data.avatar_url} width={300}  />

     <button className='text-center m-4 text-white bg-gray-600 p-4 text-3xl rounded-xl ' variant="primary" onClick={repoDataURL}>
            Click for Repository
          </button>

     <div className='text-center m-4 text-black bg-gray-100 p-4 text-3xl'
    > {RepoData} </div>
    </>
  )
}

export default Github

export  const  githubLoaderInfo = async () =>{
    const response = await fetch('https://api.github.com/users/rahuldurge99')
    return response.json()
}