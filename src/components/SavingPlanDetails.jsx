import React from 'react';

const SavingPlanDetails = ({ openSidebar }) => {
  return (
    <div className='saving-plan-details flex justify-between '>
      <h2 className='text-2xl text-[#2C2C2C]'>Saving plan details</h2>
      <div className='plan-actions flex gap-3'>
        <button
          onClick={() => openSidebar('upcoming-orders')}
          className='px-3 py-6 border rounded-2xl '
        >
          Upcoming orders
        </button>
        <button
          onClick={() => openSidebar('order-history')}
          className='px-3 py-6  border rounded-2xl'
        >
          Order history
        </button>
      </div>
    </div>
  );
};

export default SavingPlanDetails;
