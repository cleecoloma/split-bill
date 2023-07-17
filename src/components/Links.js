import React from 'react'

function Links() {
  return (
    <div className="bg-slate-200 mx-auto flex justify-center items-center">
      <a className="hover:bg-[#008080] hover:text-white hover:rounded-lg text-[#035454] flex justify-center py-3 w-24">
        Home
      </a>
      <a className="hover:bg-[#008080] hover:text-white hover:rounded-lg text-[#035454] flex justify-center py-3 w-24">
        History
      </a>
      <a className="hover:bg-[#008080] hover:text-white hover:rounded-lg text-[#035454] flex justify-center py-3 w-24">
        Friends
      </a>
    </div>
  );
}

export default Links
