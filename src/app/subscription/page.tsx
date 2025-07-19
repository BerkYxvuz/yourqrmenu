"use client"
import { Navbar } from '@/components'
import Modal from '@/components/modal'
import React, { Component } from 'react'
import countries from '../../../public/countries.json';

export class Subscription extends Component {
  render() {
    return (
      <>
      <Navbar />
      
      <div className="flex mx-auto px-4 py-8 bg-[#EFEEEA] h-screen">
        <div className="max-w-2xl mx-auto mt-16">
          <h1 className="text-3xl font-bold mb-4 text-center">Subscription</h1>

          <Modal className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Your Business</h2>
            <input
              type="text"
              placeholder="Enter your business name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            
            <select className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option value="Country">Select Country</option>
              {
                countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))
              }
            </select>

            <input
              type="text"
              placeholder="What's your business type? Bar, Restaurant, Cafe, etc."
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Next
            </button>
          </Modal>

        </div>
      </div>
      </>
    )
  }
}

export default Subscription
