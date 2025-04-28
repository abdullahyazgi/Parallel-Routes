import { getSalesFromDB } from '@/utils/data'
import React from 'react'

const SalesPage = async() => {
    const sales = await getSalesFromDB();
  return (
    <div className='card bg-blue-500'>
        {sales}
    </div>
  )
}

export default SalesPage