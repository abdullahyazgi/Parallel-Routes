import { getSalesFromDB } from '@/utils/data'
import React from 'react'

const DefaultSalesPage = async() => {
    const sales = await getSalesFromDB();
  return <div className="card bg-green-500">Default {sales}</div>;
}

export default DefaultSalesPage;