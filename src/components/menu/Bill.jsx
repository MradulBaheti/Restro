import React from 'react'
import { useSelector } from 'react-redux'
// This import now works because you created the function in your slice!
import { getTotalPrice } from '../../redux/slices/cartSlice' 

export const Bill = () => {

  // Get the cart array just to count the number of items
  const cartData = useSelector((state) => state.cart);
  
  // Use your new selector to get the calculated total
  const total = useSelector(getTotalPrice); 

  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  return (
    <>
      <div className='flex items-center justify-between px-5 mt-2'>
          {/* FIX 1: Added parentheses for formatting */}
          <p className='text-xs text-[#ababab] font-medium mt-2'>Items ({cartData.length})</p>
          {/* FIX 2: Added .toFixed(2) for currency */}
          <h3 className='text-[#f5f5f5] text-md font-bold'>rs.{total.toFixed(2)}</h3>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
          <p className='text-xs text-[#ababab] font-medium mt-2'>Tax (5.25)%</p>
          <h3 className='text-[#f5f5f5] text-md font-bold'>rs.{tax.toFixed(2)}</h3>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
          <p className='text-xs text-[#ababab] font-medium mt-2'>Total With Tax</p>
          <h3 className='text-[#f5f5f5] text-md font-bold'>rs.{totalPriceWithTax.toFixed(2)}</h3>
      </div> 

      <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold'>Cash</button>
        <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold'>Online</button>
      </div>
      
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg'>Print Receipt</button>
        <button className='bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg'>Place Order</button>
      </div>
    </>
  )
}
