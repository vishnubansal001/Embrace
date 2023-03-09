import React from 'react';
import bg from '../assests/bg.svg';

const Journey = () => {
  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className='flex md:flex-row flex-col items-start justify-center w-[90%] mx-auto gap-5 md:p-10 p-5'>
            <div className='md:w-[40%] text-white md:ml-10 flex flex-col justify-start items-start gap-2'>
                <h1 className='md:text-4xl text-2xl'>Start Your Journey</h1>
                <h1 className='md:text-4xl text-2xl'>With Us Now</h1>
            </div>
            <div className='md:w-[50%] text-white flex flex-col gap-5'>
                <p className='font-normal md:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae modi officiis molestias eos, doloribus fuga error deleniti commodi. Qui, quibusdam deleniti omnis illum commodi enim velit magni eius temporibus, harum inventore nobis. Aperiam molestiae dolores alias, iusto rem suscipit.</p>
                <a href="/" className='underline cursor-none'>Learn Now</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Journey
