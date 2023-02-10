
const Navbar = () => {
  return (
    <nav className="bg-principal">
        <div className="w-[94%] mx-auto flex items-center justify-between h-16">
              <div className="logo">
                  <img src="/icons/Logo.svg" alt="logo" className="w-24"/>
             </div>
              <div className="text hidden md:block">
                  <h2 className="text-grey">English (Oral-pronunctiation)</h2>
             </div>
              <div className="avatar">
                <img src="/icons/avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full"/>
             </div>
        </div>
    </nav>
  )
}

export default Navbar