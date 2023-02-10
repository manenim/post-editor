import { Checkbox } from '@mui/material'
import {AiFillCloseCircle} from 'react-icons/ai'
import Slide from './Slide'

const RightSideBar = () => {
  return (
      <div className="md:w-[32%] lg:w-[24%] hidden md:block border-outline border-l-[1px] border-[1px]">
          <div className="w-[90%] mx-auto pb-28">
              <h2 className="text-[1.6rem] mt-4 text-principal font-semibold">Create Post</h2>

              <div className="text-box mt-6">
                <div className="text-wrapper flex justify-between">
                    <div className="post-des flex mb-1">
                      <h3 className="mr-2 text-[1.1rem]">Post Descriptions</h3>
                      <img src="/icons/information-circle.svg" alt="info" />
                    </div>
            
                    <p>0/150</p> 
                </div>
                <textarea name="" id="" cols="30" rows="10" className="px-2 pt-2 w-full h-20 border-[1px] border-rounded-md outline-rounded-md resize-none border-outline outline-outline"></textarea>
              </div>

        
        {/* Media Section */}
              <div className="media mt-8">
                  <div className="post-des flex mb-1">
                      <h3 className="mr-2 text-[1.1rem]">Media Content</h3>
                      <img src="/icons/information-circle.svg" alt="info" />
                    </div>
                  <div className="flex border-2 items-center border-rounded-md border-dashed py-2 px-4 border-principal">
                    
                      <img src="/icons/UploadIcon.svg" alt="media" className="w-12 mr-2" />

                      <div className="text">
                          <h3 className="text-[11px] font-bold">Drag & drop files or <span className="text-principal">Browse</span></h3>
                          <p className="text-[10px]">Supported Formats: JPEG, JPG, PNG</p>
                      </div>
                  </div>
              </div>


              {/* TONE OF VOICE   */}
              <div className="tone mt-8">
                <div className="text-wrapper flex justify-between mb-1">
                    <h3 className="mr-2 text-[1.1rem]">Tone of Voice</h3>
                    <p>0/3</p> 
                </div>

                  <div className="input-container w-full h-10 border-outline border-rounded-lg border-[1px] flex justify-between bg-white">
                      <input type="text" className="w-[80%] h-full pl-2 border-none outline-none" placeholder="" />   
                      <img src="/icons/chevron-down.svg" alt="" className="w-[1.4rem] mr-2"/>
                  </div>

                  <div className="tags mt-4 grid grid-cols-3 gap-4">
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 1</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                 </div>
            
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 2</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                    </div>
            
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 3</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                    </div>
                  </div>

              </div>


        {/* KEYWORDS  */}
        
              <div className="tone mt-8">
                <div className="text-wrapper flex justify-between mb-1">
                    <h3 className="mr-2 text-[1.1rem]">Keywords</h3>
                    <p>0/5</p> 
                </div>

                  <div className="input-container w-full h-10 border-outline border-rounded-lg border-[1px] flex justify-between bg-white">
                      <input type="text" className="w-[80%] h-full pl-2 border-none outline-none" placeholder="" />   
                      <img src="/icons/chevron-down.svg" alt="" className="w-[1.4rem] mr-2"/>
                  </div>

                  <div className="tags mt-4 grid grid-cols-3 gap-4">
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 1</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                 </div>
            
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 2</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                    </div>
            
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 3</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                    </div>
            
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 4</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>
            
                    <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                        <p className="text-[.9rem] font-semibold pl-2">Tone 5</p>
              {/* <img src="/icons/.svg" alt="" /> */}
                          <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                    </div>
                  </div>

        </div>
        

        {/* RANGE SLIDER  */}
        <div className="tone mt-8">
            <div className="text-wrapper flex justify-between mb-1">
                <h3 className="mr-2 text-[1.1rem]">Placeholder</h3>
            </div>

            <Slide/>     
        </div>
        



        {/* SOCIAL MEDIA  */}

        <div className="tone mt-8">
            <div className="text-wrapper flex justify-between mb-1">
                <h3 className="mr-2 text-[1.1rem]">Select Social Media</h3>
            </div>
          
          <div className="socials w-[86%]">

            <div className="social flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src="icons/instagram-5 logo-1.svg" alt="social" className='mr-[.8rem]' />
                <p>Instagram</p>
              </div>
              <Checkbox />
            </div>

            <div className="social flex items-center justify-between my-4">
              <div className="flex items-center">
                <img src="icons/Twitter logo-1.svg" alt="social" className='mr-[.8rem]' />
                <p>Instagram</p>
              </div>
              <Checkbox />
            </div>


            <div className="social flex items-center justify-between my-4">
              <div className="flex items-center">
                <img src="icons/Linkedin logo.svg" alt="social" className='mr-[.8rem]' />
                <p>Instagram</p>
              </div>
              <Checkbox />
            </div>

            
            <div className="social flex items-center justify-between my-4">
              <div className="flex items-center">
                <img src="icons/Facebook logo-1.svg" alt="social" className='mr-[.8rem]' />
                <p>Instagram</p>
              </div>
              <Checkbox />
            </div>

          </div>
        </div>

        

        {/* SUBMIT BUTTON  */}

        <div className="buttonn">
          <button className="w-full h-10 bg-principal text-white rounded-sm mt-14 flex items-center justify-center">
            <p className="mr-1">Generate</p>
            <img src="icons/arrow-right.svg" alt="arrow" className='mt-[4px]'/>
          </button>
        </div>



          </div>
      
      </div>
  )
}

export default RightSideBar