import { getProfitFromDB } from '@/utils/data'
import React from 'react'

const DefaultProfitPage = async() => {
    const profit = await getProfitFromDB();
  return <div className="card bg-green-500">Default {profit}</div>;
}

export default DefaultProfitPage;