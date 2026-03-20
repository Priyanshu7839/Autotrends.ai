import React from 'react'
import { Navbar,Footer, AskAutotrendsAi } from '../components'
import { Outlet } from 'react-router'
import { SignIn} from '../Pages'
import { useSelector } from 'react-redux'

const MainLayout = () => {

  const isSignInOpen = useSelector((state)=>state.popup.isSignInOpen)
  const formOpen = useSelector((state)=>state.popup.formOpen)
  


  return (
    <div className='min-h-[100vh]  relative  w-screen flex flex-col justify-between items-center '>
       <div className=' w-full relative h-max'>
       <Navbar/>
           <div className='pb-[20px] '>
           <Outlet/>
          {isSignInOpen &&
           <SignIn className='fixed top-[0] z-[600] left-[0] h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.4)] backdrop:blur-md'/>
           }
          {formOpen &&
           <AskAutotrendsAi className='fixed top-[0] z-[600] left-[0] h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.4)] backdrop:blur-md'/>
          }
         
           </div>

          

       </div>
          
        <Footer/>
        
    </div>
  )
}

export default MainLayout