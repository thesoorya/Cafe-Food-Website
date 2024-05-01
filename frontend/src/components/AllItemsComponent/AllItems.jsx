import React from 'react'
import BreakFast from './BreakFast/BreakFast'
import Beverages from './Beverages/Beverages'
import Lunch from './Lunch/Lunch'
import FingerFood from './FingerFood/FingerFood'
import Desserts from './Desserts/Desserts'
import SummerSpecial from './SummerSpecial/SummerSpecial'

const AllItems = () => {
  return (
    <div>
      <div>
        <BreakFast />
        <Lunch />
        <Beverages />
        <FingerFood />
        <Desserts />
        <SummerSpecial />
      </div>
    </div>
  )
}

export default AllItems