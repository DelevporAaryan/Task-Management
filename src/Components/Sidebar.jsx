import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: '/',
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link: '/importantTasks',
    },
    {
      title: "Completed tasks",
      icon: <FaCheckDouble />,
      link: '/completedTasks',
    },
    {
      title: "Incompleted tasks",
      icon: <TbNotebookOff />,
      link: '/IncompletedTasks',
    },

  ];
  return (
    <>
      <div >
        <h2 className='text-xl font-semibold'>Ritesh Jha</h2>
        <h4 className='mb-1 text-gray-400'>@gmail</h4>
        <hr />
      </div>

      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className='flex items-center text-[1.1rem] hover:cursor-pointer  hover:bg-sky-700 transition-all duration-300 hover:scale-105 
          bg-sky-900  p-2 rounded  my-2'>{items.icon}&nbsp;{items.title}</Link>
        ))}
      </div>
      <div>
        <button className='bg--700 hover:transition-all duration-300 
        bg-amber-600 text-gray-900 cursor-pointer w-full p-2 rounded'>Log Out</button>
      </div>
    </>

  )
}

export default Sidebar