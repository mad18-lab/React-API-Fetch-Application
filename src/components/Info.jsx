import React from 'react'

const Info = () => {
  return (
    <div>
      <div className='w-[300px] lg:w-[980px] sm:w-[600px] mx-auto text-white'>
        <div className='w-full mt-5 p-5 bg-black rounded-lg shadow-xl'>
            <h1 className='font-bold text-3xl pb-4'>What does this React App do?</h1>
            <p>This React app, built by Madhav Gupta, makes an API call to the public JSONPlaceholder API and displays the information in a tabular data grid built using MaterialUI components.
                It is an encapsulation of multiple core React concepts such as hooks, API data fetching using FetchAPI, and data formatting using MaterialUI.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Info
