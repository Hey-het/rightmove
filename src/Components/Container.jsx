

export default function Signcontainer() {
  return (
    <>

      <div className="mt-8 mx-auto bg-emerald-50  p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 w-[800px] space-x-6">
        <div className="px-4 items-center justify-center">
          <h3>
            Sign in to streamline your search
          </h3>
          <p>
            Save properties, create alerts and keep track of the 
            enquiries you send to agents.
          </p>
        </div>
        <div className=" items-center justify-center">
          <button className=" border-2 border-black bg-white  text-black hover:bg-gray-300 rounded-lg w-[300px] h-[50px] cursor-pointer">
            Sign in or create an account
          </button>
        </div>
      </div>


    </>
  )

}