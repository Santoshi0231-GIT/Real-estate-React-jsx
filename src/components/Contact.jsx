import React from 'react'

const Contact = () => {
  return (<>
    <div className='text-center p-6 py-10 lg:px-32 w-full overflow-hidden'id='Contact'>
         <h1 className='text-2xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-2 under font-light'>With Us</span></h1>  
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Lets Build Your Future Together</p>
      



      <form className='max-w-2xl mx-auto  text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name:
            </div>
            <input type="text "name='name' placeholder='Enter your Name' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2 overflow-hidden focus:bg-gray-500'/>
              <div className='w-full md:w-1/2 text-left'>
                Your Email:
            </div>
            <input type="email "name='email' placeholder='Enter your Email' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2 overflow-hidden'/>
        </div>
        <div>
   Message <textarea name="Message" required className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'>

   </textarea>
      </div>
      </form>
  </div>
   </>
  )
}

export default Contact