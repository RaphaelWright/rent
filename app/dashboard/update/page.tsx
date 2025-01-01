"use client";
import React, { useState, useEffect } from 'react';

interface House {
  id: number;
  title: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string;
}

export default function Edit() {
  const [formData, setFormData] = useState<House>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    available: false,
    imageUrl: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  // Example: Prepopulate the form with the house's existing details (replace ID with dynamic fetching logic)
  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await fetch('/api/houses/1'); // Replace "1" with dynamic ID if needed
        if (!response.ok) {
          throw new Error('Failed to fetch house details');
        }
        const house: House = await response.json();
        setFormData(house);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHouseDetails();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/houses/${formData.id}`, {
        method: 'PUT', // Assuming you're using PUT to update
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update house');
      }

      setMessage('House updated successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to update house. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 flex flex-col gap-4"
      >
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
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
            value={formData.price}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>

        <label>
          Image URL
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          Available
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Edit'}
        </button>

        {message && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
