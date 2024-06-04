import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
        <div className="flex gap-6">
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name="min" placeholder="min price" className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
            <input type="text" name="max" placeholder="max price" className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Type</option>
                <option value="physical">Color</option>
                <option value="digital">Test</option>
            </select>
            <select name="ribbon" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">Category</option>
                <option value="new-arrival">New Arrival</option>
                <option value="popular">Popular</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option value="">All Filters</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
            </select>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Filter