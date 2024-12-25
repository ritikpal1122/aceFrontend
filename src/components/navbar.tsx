
import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full navbar-main shadow-lg backdrop-blur supports-[backdrop-filter]:bg-black">
      <div className="container flex h-14 items-center justify-center" style={{margin:"0 auto"}} >
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Frontend</span>
            <span className="text-orange-500">Geek</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium text-white" >
            <Link
              to="/"
              className="transition-colors hover:text-orange-500 "
            >
              Home
            </Link>
            <Link
              to="/frontend-interview"
              className="transition-colors hover:text-orange-500"
            >
              Frontend Interview
            </Link>
            <Link
              to="/tech-blogs"
              className="transition-colors hover:text-orange-500 "
            >
              Blogs/Notes
            </Link>
          </nav>
        </div>
        {/* <div className="flex  items-center justify-between space-x-2 md:justify-end">
          <Button variant="ghost" size="icon">
            <MoonIcon className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div> */}
      </div>
    </header>
  )
}

