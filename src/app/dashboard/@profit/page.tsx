import { getProfitFromDB } from '@/utils/data'
import React from 'react'

const ProfitPage = async() => {
    const profit = await getProfitFromDB();
  return (
    <div className='card bg-green-500'>
        {profit}
    </div>
  )
}

export default ProfitPage