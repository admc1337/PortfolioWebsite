const Header = () =>{
    return(
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900-to-zinc900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4">
                <h1>
                    <a 
                        href="/" 
                        className="logo"
                    >
                        <img 
                            src="/images/favicon.svg"
                            width={40}
                            height={40} 
                            alt="Test image"   
                        />
                    </a>
                </h1>

                <div className="">
                    <button 
                        className=""
                        onClick={null}
                    >
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>
                    Navbar
                </div>

                <a
                href="#contact"
                className=""
                >
                    
                </a>
            </div>
        </header>
    )
}

export default Header