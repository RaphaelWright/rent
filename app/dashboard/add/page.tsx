"use client";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function AddHouse() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    available: true,
  });

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/houses/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);

      if (response.ok) {
        console.log("House added successfully");

        // Trigger toast notification
        toast({
          title: "House Added Successfully",
          description: "Your house has been added to the listing.",
        });
        
      } else {
        console.error("Form submission failed");
        toast({
          title: "Submission Failed",
          description: "There was an issue adding your house. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
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
            type="text"
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
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                available: e.target.checked,
              }))
            }
          />
          Available
        </label>

        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add House
        </button>
      </form>
    </div>
  );
}
