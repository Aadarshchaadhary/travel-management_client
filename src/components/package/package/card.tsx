import React from 'react'
import type { IPackageResponse } from '../../../@types/package.types'
import { TiStarFullOutline } from "react-icons/ti";
import { TbCurrencyRupeeNepalese } from 'react-icons/tb';
import { CiStopwatch } from 'react-icons/ci';
import moment from 'moment';
import { MdOutlineAirlineSeatReclineNormal } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { CiShoppingTag } from "react-icons/ci";
import { Link } from 'react-router';
type IProps = {
  pkg: IPackageResponse
  show_button?:boolean
}

const DetailSection: React.FC<IProps> = ({ pkg ,show_button=false}) => {
  const daysAgo = moment(pkg.createdAt).fromNow();
  const currentDate = moment(new Date(Date.now()))
  const startDate = moment(pkg.start_date)
  const endDate = moment(pkg.end_date)
  const daystoGo = startDate.diff(currentDate, 'days')
  const totalDays = endDate.diff(startDate, 'days')
  return (
    <div className='relative w-full h-full px-2'>
      {/* name */}
      <div className='w-full flex justify-between'>
        <h1 className='text-gray-800 font-bold text-3xl'>{pkg.name}</h1>
        <div className='flex gap-1'>
          <span>4.5</span>
          <TiStarFullOutline size={22} className='text-yellow-500' />
        </div>

      </div>

      {/* price */}
      <div className='flex items-center gap-1 mt-2'>
        <TbCurrencyRupeeNepalese size={20} className='text-blue-700' />
        <span className='text-[18px] mt-1 font-semibold text-gray-700'>{pkg.price.toFixed(2)} {pkg.cost_type.replace('_', ' ').toLocaleLowerCase()}</span>
      </div>

      {/* chips */}
      <div className='flex gap-2 flex-wrap mt-3'>

        {/* category */}
        <div className='flex gap-1 items-center border border-gray-300 w-fit py-1 px-2 rounded-md '>
          <CiShoppingTag size={22} className='text-blue-500 ' />
          <p className='text-[18px] mt-1 font-semibold text-gray-700'>{pkg.category.name}</p>
        </div>

        <div className='flex items-center justify-between  border border-gray-300 w-fit py-1 px-2 rounded-md'>
          <div className='flex items-center gap-1'>
            <CiStopwatch size={19} className='text-blue-700' />
            <p className='text-[18px] font-semibold text-gray-700'>{daysAgo}</p>
          </div>

        </div>

        <div className='flex items-center gap-1 mt-1 text-[18px]  border border-gray-300 w-fit py-1 px-2 rounded-md'>
          <MdOutlineAirlineSeatReclineNormal size={20} className='text-blue-700' />
          <span className='text-[18px] font-semibold text-gray-700'>{pkg.seats_available} / {pkg.total_seats}</span> seats available
        </div>
        <div className='flex items-center gap-1 mt-1  border border-gray-300 w-fit py-1 px-2 rounded-md'>
          <FaRegCalendarAlt size={18} className='text-blue-700' />
          <span className='text-[18px] font-semibold text-gray-700'>{Math.abs(daystoGo)}  {daystoGo > 0 ? 'days to go' : 'days ago'} ({startDate.format('D MMM YYYY')})</span>
        </div>

        <div className='flex items-center gap-1 mt-1  border border-gray-300 w-fit py-1 px-2 rounded-md'>
          <IoBed size={20} className='text-blue-700' />
          <span className='text-[18px] font-semibold text-gray-700'>{totalDays} Days stay</span>
        </div>


      </div>

      {/* description */}
      <div className='mt-6'>
        <p className='text-gray-600 text-[16px]'>{pkg.description}</p>
      </div>

      {/* button section */}
     {show_button && <div className='absolute bottom-0 right-1 w-full flex  items-center justify-end  gap-10 mt-10 font-bold'>
        <button className=' min-w-[180px] border border-blue-600 px-5 py-4 rounded-md text-blue-700 cursor-pointer' >
          Add to Favourite
        </button>
        <button className='bg-blue-500 px-5 py-4 min-w-[180px] rounded-md text-white cursor-pointer'>
          <Link to={`/book/${pkg._id}?name=${pkg.name}&d=${pkg.description}`}>
            Book Now
          </Link>
        </button>
      </div>}

    </div>
  )
}

export default DetailSection