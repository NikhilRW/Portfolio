import React from 'react'
import MagicButton from './MagicButton'
import { socialMedia } from '@/data/data'

function Footer() {
  return (
    <footer id='contact' className='py-5 relative '>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" 
            className='w-full h-full opacity-50'
            />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] text-white-100'>
                Ready To Take <span className='text-purple'>Your </span>
                Digital Presence On Next Level ? 
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach Out To Me Todya And Let&apos;s Discuss How I can Help You Achieve Your Goals</p>
            <a href="nikhilwankhede0707@gmail.com">
                <MagicButton title='lets Get In Touch'/>
            </a>
        </div>
        <div className='flex mt-10 md:mt-20 md:flex-row md:px-20 py-6 flex-col justify-between  items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright &copy; 2024 Nikhil
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>{
                    return <div key={profile.id}
                    className='w-10 h-10 cursor-pointer flex justify-center items-center
                    backfrop-filter bacdriop-blur saturate-180 bg-opacity-75 bg-black-200
                    rounded-lg
                    '
                    >
                        <img src={profile.img}  alt={profile.img}
                        width={20} height={20} />
                    </div>
                })

                }

            </div>

        </div>
    </footer>
  )
}

export default Footer