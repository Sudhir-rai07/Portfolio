import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className='flex flex-wrap items-center w-full py-4 text-white bg-[#0f0f0f]'>
        {/* <p className='ml-4 mr-8'>@Sudhir</p> */}
        <div className='flex flex-wrap flex-col md:flex-row gap-4 mx-auto items-center w-1/2 h-full [16px] justify-evenly'>
            <div className='flex items-center hover:underline '>
                <span className='mr-2'><RiGithubLine /></span>
                <span><a href='https://github.com/Sudhir-rai07' target='_blank'>Github</a></span>
            </div>
              <div className='flex items-center hover:underline '>
                <span className='mr-2'><RiTwitterXLine /></span>
                <span><a href='https://twitter.com/dev_sudhir_07' target='_blank'>Twitter</a></span>
            </div> 
            <div className='flex items-center px-3 py-1 hover:underline '>
                <span className='mr-2'><RiInstagramLine /></span>
                <span><a href='https://www.instagram.com/_.iamsr/' target='_blank'>Instagram</a></span>
            </div>
              <div className='flex items-center hover:underline '>
                <span className='mr-2'><RiFacebookLine /></span>
                <span><a href='https://www.facebook.com/sudhirrai.rai.148' target='_blank'>Facebook</a></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
