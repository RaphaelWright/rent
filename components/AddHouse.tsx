import React from 'react'

export default function AddHouse() {
  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-white p-6 w-96 flex flex-col gap-4"
      >
        <label>
          Title
          <input
            type="text"
            name="title"
            className="border p-2 w-full"
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            className="border p-2 w-full"
            required
          />
        </label>

        <label>
          Price (per night)
          <input
            type="number"
            step="0.01"
            name="price"
            className="border p-2 w-full"
            required
          />
        </label>

        <label>
          Image URL
          <input
            type="url"
            name="imageUrl"
            className="border p-2 w-full"
            required
          />
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
          />
          Available
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add House
        </button>
      </form>
    </div>
  )
}
