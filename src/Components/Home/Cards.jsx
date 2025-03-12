import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
const Cards = () => {

  const data = [

    {    
      title: "Creation of website",
      description: "I have to develop a website for an e-commerce brand.",
    },
    {
      title: "Gym",
      description: "I have to go to the gym in early morning.",
    },
    {
      title: "Coding practice",
      description: "I have to solve dsa problems for my interview.",
    },
    {
      title: "Drinking water",
      description: "In this extreme heat, I must have to drink 1 litre of water",
    },
  ]

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {data &&
        data.map((items, i) => (
          <div className='flex flex-c justify-between p-4 bg-gradient-to-b from-gray-900 via-sky-900 to-gray-900 text-white shadow-[0_0px_1px_rgba(168,168,168,0.9)] hover:scale-105 hover:shadow-[0_4px_8px rgba(168,168,168,0.5)] transition-all duration-300 ease-out cursor-pointer'>
            <div>
              <h1 className='text-xl font-semibold'>{items.title}</h1>
              <p className='text-gray-200 my-2'>{items.description}</p>
              <div className='mt-4 w-full'>
                <button className="bg-amber-600 p-2 rounded text-gray-900 text-sm">Incomplete</button>
              <div>
                <button>
                  <CiHeart />
                </button>
                <button></button>
                <button></button>
              </div>
              
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Cards