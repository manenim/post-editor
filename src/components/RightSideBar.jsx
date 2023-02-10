
const RightSideBar = () => {
  return (
      <div className="w-[22%] border-outline border-l-[1px] border-[1px]">
          <div className="w-[84%] mx-auto">
              <h2>Create Post</h2>

              <div className="text-box">
                <div className="text-wrapper flex justify-between">
                    <h3>Post Description</h3>
                    <p>0/150</p> 
                </div>
                <textarea name="" id="" cols="30" rows="10" className="w-full h-24 border-[1px] resize-none border-outline outline-outline"></textarea>
              </div>

              <div className="media">
                  <div className="text-wrapper flex justify-between">
                    <h3>Post Description</h3>
                    <p>0/150</p> 
                  </div>
                  <div className="flex border-2 border-dashed border-principal">
                    
                      <img src="/icons/UploadIcon.svg" alt="media" className="w-24" />

                      <div className="text">
                          <h3>Drag & Drop files or <span>Browse</span></h3>
                          <p>Supported Formats: JPEG, JPG, PNG, MP 4</p>
                      </div>
                  </div>
              </div>



              <div className="tone">
                <div className="text-wrapper flex justify-between">
                    <h3>Post Description</h3>
                    <p>0/150</p> 
                </div>

                  <div className="input-container w-full h-10 border-black border-2 flex justify-between bg-white">
                      <input type="text" className="w-[80%] h-full pl-2 border-none outline-none" placeholder="" />   
                      <img src="/icons/chevron-down.svg" alt="" />
                  </div>

                  <div className="tags">
                    <div className="tag bg-grey inline-block rounded-2xl py-[.1rem] px-2">
                        <p>Tone 1</p>
                        <img src="/icons/.svg" alt="" />
                    </div>
                  </div>

              </div>


              <div className="tone">
                <div className="text-wrapper flex justify-between">
                    <h3>Post Description</h3>
                    <p>0/150</p> 
                </div>

                  <div className="input-container w-full h-10 border-black border-2 flex justify-between bg-white">
                      <input type="text" className="w-[80%] h-full pl-2 border-none outline-none" placeholder="" />   
                      <img src="/icons/chevron-down.svg" alt="" />
                  </div>

                  <div className="tags">
                    <div className="tag bg-grey inline-block rounded-2xl py-[.1rem] px-2">
                        <p>Tone 1</p>
                        <img src="/icons/.svg" alt="" />
                    </div>
                  </div>

                      
              </div>



          </div>
      
      </div>
  )
}

export default RightSideBar