"use client";
import React, { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface House {
  id: number;
  title: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string;
}

export default function Page() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('/api/houses'); // Adjust endpoint as necessary
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }
        const data = await response.json();
        setHouses(data.houses || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    available: true,
  });

  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    }));
  };

  const handleEdit = (house: House) => {
    setSelectedHouse(house);
    setFormData({
      id: house.id,
      title: house.title,
      description: house.description,
      price: house.price.toString(),
      imageUrl: house.imageUrl,
      available: house.available,
    });
  };

  const update = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = formData.id;
  
    try {
      const response = await fetch(`/api/houses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-user-role": "admin",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          price: parseFloat(formData.price),
          imageUrl: formData.imageUrl,
          available: formData.available,
        }),
      });
  
      if (response.ok) {
        console.log("House updated successfully");
        // Optionally refetch the houses data
      } else {
        console.error("Failed to update house");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  if (loading) {
    return <div>Loading houses...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Houses</h1>
      {houses.length === 0 ? (
        <div>No houses found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {houses.map((house: House) => (
            <div
              key={house.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md"
            >
              <img
                src={house.imageUrl}
                alt={house.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-xl font-semibold">{house.title}</h2>
              <p className="text-gray-700">{house.description}</p>
              <p className="text-blue-500 font-bold">${house.price.toFixed(2)} / night</p>
              <div className='flex items-center justify-between'>
                <p className={`text-sm ${house.available ? 'text-green-500' : 'text-red-500'}`}>
                  {house.available ? 'Available' : 'Not Available'}
                </p>
                <Dialog>
                  <DialogTrigger onClick={() => handleEdit(house)}>
                    <Pencil size={18} color="#696969" />
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit House</DialogTitle>
                      <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea!
                      </DialogDescription>
                      <form onSubmit={update} className="bg-white p-6 flex flex-col gap-4">
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
                            type="text"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            required
                          />
                        </label>

                        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                          Save Changes
                        </button>
                      </form>

                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
