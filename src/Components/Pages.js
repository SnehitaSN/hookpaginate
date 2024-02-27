import React from 'react'
import Pagination from '@mui/material/Pagination'

import { usePagination } from '../Hooks/pagination'

const Pages = ({data}) => {
    const [ totalPages,startPageIndex,endPageIndex,currentPageIndex,displayPage] =usePagination(5,data.length)
  return (
  <div>
    {
        ((i)=>{
            const displayPosts = []
            for(let i = startPageIndex;i<= endPageIndex;i++);{
            displayPosts.push(
                <div key={data[i].id}>
                    <h3><span>{i+1}</span>{data[i].title} {""}</h3>
                    <p>{data[i].body}</p>

                </div>
            )
        }
            displayPosts()
        })()
    }
    <Pagination color='primary' 
    count={totalPages}
    onChange={(event,value)=>displayPage(value)}/>
  </div>
  )
    
  
}

export default Pages