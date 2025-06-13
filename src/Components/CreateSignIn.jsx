import Image from "next/image";

export default function CreateSignIn({onClose}) {
    return (
        <>
            <div className="fixed inset-0 backdrop-contrast-75 bg-opacity-50 z-50">
                <div className="absolute right-0 top-0 h-full w-auto max-w-sm bg-white p-3 shadow-lg">
                    <div className="text-xl font-bold text-[#111] flex border-b-2 border-gray-300 pb-2">
                        <span className='font-sans ml-28'>rightmove</span><span className="text-green-500 ml-1">▵</span>
                        <button  onClick={onClose}
                        className="text-gray-600 text-right mb-4 flex justify-end items-center ml-auto">
                            ✕
                        </button>
                    </div>
                    <br/>
                    <h1 className="text-2xl font-semibold text-[#111] ml-2">Sign in or Create an <br/> account</h1>
                    <br/>
                    <h2 className=" text-gray-800 ml-4">Email address</h2>
                    <div className="items-center justify-center border-2 border-red-500 p-0.5 rounded-md  w-[310px] h-[60px] mt-4 ml-2">
            
                        <input
                            className="border-2 border-gray-400 bg-white text-black hover:bg-gray-100 rounded-md w-[300px] h-[50px] cursor-pointer"
                            type="text"
                            id="email"
                            required
                        />
                    </div>
                    <button type="submit"
                        className=" bg-teal-100 text-black  rounded-lg w-[300px] h-[50px] cursor-pointer mt-4 ml-2"
                    >
                        Continue
                    </button>
                </div>
            </div>


        </>
    );
}