
const LeftSideBar = () => {
  return (
      <div className="w-[20%] border-outline bg-grey border-l-[1px]">
          <div className="wrapper w-[84%] mx-auto">
              <h2 className="text-[1.8rem] m-4 text-principal font-semibold">Preview Post</h2>

              <div className="post-image shadow-md shadow-outline">
                    <img src="icons/post1.jpg" alt="post" className="w-full" />
              </div>

              <div className="socials flex justify-between w-full mt-8">
                  <img src="/icons/chevron-left.svg" alt="" />
                  <div className="social flex w-[80%] justify-around">
                      <img src="/icons/LinkedIn logo.svg" alt="instagram" className="w-6" />
                      <img src="/icons/Facebook logo.svg" alt="instagram" className="w-6" />
                      <img src="/icons/Twitter logo.svg" alt="instagram" className="w-6" />
                      <img src="/icons/Instagram-5 logo.svg" alt="instagram" className="w-6" />
                </div>
                <img src="/icons/chevron-right.svg" alt="" />
              </div>


            <div className="buttonn">
                <button className="w-full h-10 bg-principal text-white rounded-sm mt-14">Post</button>
            </div>

          </div>
    </div>
  )
}

export default LeftSideBar