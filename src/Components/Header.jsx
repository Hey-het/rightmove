export default function Header() {
  return (
    <>  
    <nav className="navbar  px-5 top-0 left-0 w-full z-50 border-b">  
    <div className="w-full  z-50">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-900">rightmove<span className="text-green-500">▵</span></div>

        {/* Navigation Items */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-blue-900 relative">
          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2  border-blue-900 p-3 hover:bg-gray-100">Buy</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className=" mx-auto mr-64 grid grid-cols-2 ">
                <div className="text-sm hover:underline">Property for sale</div>
                <div className="text-sm hover:underline">New homes</div>
                <div className="text-sm hover:underline">Property valuation</div>
                <div className="text-sm hover:underline">Investors</div>
                <div className="text-sm hover:underline">Mortgages</div>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2 border-blue-900 p-3 hover:bg-gray-100">Rent</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
                <div className="text-sm hover:underline">Property to rent</div>
                <div className="text-sm hover:underline">Student property to rent</div>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2 border-blue-900 p-3 hover:bg-gray-100">House Prices</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
                <div className="text-sm hover:underline">Sold house prices</div>
                <div className="text-sm hover:underline">Market trends</div>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2 border-blue-900 p-3 hover:bg-gray-100">Find Agent</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
                <div className="text-sm hover:underline">Estate agents</div>
                <div className="text-sm hover:underline">Letting agents</div>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2 border-blue-900 p-3 hover:bg-gray-100">Commercial</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
                <div className="text-sm hover:underline">Shops</div>
                <div className="text-sm hover:underline">Offices</div>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2 border-blue-900 p-3 hover:bg-gray-100">Inspire</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
                <div className="text-sm hover:underline">Blogs</div>
                <div className="text-sm hover:underline">Ideas</div>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:border-b-2  border-blue-900">
            <span className="hover:border-b-2 border-blue-900 p-3 hover:bg-gray-100">Overseas</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-100 shadow-md w-screen px-10 py-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
                <div className="text-sm hover:underline">Properties abroad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign In */}
        <button className="btn border border-green-400 text-sm font-semibold text-blue-900 px-4 py-1 rounded hover:bg-green-100">
          Sign in
        </button>
      </div>
    </div>
    </nav>
    </>

  );
}
