import React from 'react'

function Bill() {
  return (
    <div className="bg-gray-100 h-80 m-6 rounded-2xl">
      <table className='table-auto'>
        <thead className="flex">
          <tr>
            <th className="w-1/2">Item</th>
            <th className="w-1/4"># of Friends</th>
            <th className="w-1/4">Amount</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Bill
