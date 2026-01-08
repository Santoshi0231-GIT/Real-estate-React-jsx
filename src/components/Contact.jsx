import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fec88b57-fc19-4160-9f9b-8d1323fa6d67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
  toast.success("Form submitted successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
   toast.error(data.message)
      setResult(data.message);
    }
  };

  return (<>
    <motion.div className='text-center p-6 py-10 lg:px-32 w-full overflow-hidden'id='Contact'
         initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}>
         <h1 className='text-2xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-2 under font-light'>With Us</span></h1>  
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Lets Build Your Future Together</p>
      



      <form className='max-w-2xl mx-auto  text-gray-600 pt-8' onSubmit={onSubmit}>
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
      <button className='text-white bg-blue-600 px-10 mb-10 py-2 rounded-lg'>{result?result:"Send Message"}</button>
      </form>
  </motion.div>
   </>
  )
}

export default Contact