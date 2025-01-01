// # API for specific house actions

// GET /api/houses/[id]: Fetch details of a specific house.
// PATCH /api/houses/[id]: Update house details (admin only).

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET handler
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Validate the ID
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Invalid or missing ID' }, { status: 400 });
  }

  try {
    // Fetch the house by ID
    const house = await prisma.house.findUnique({
      where: { id: Number(id) }, // Parse ID as a number
    });

    if (!house) {
      return NextResponse.json({ message: 'House not found' }, { status: 404 });
    }

    return NextResponse.json(house, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error', error: (error as Error).message },
      { status: 500 }
    );
  }
}


// PATCH handler
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
  
    // Validate the ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ message: 'Invalid or missing ID' }, { status: 400 });
    }
  
    try {
      // Parse ID as a number
      const houseId = Number(id);
  
      // Parse the request body
      const body = await req.json();
  
      // Validate the input body (you can extend validation rules as needed)
      if (!body || Object.keys(body).length === 0) {
        return NextResponse.json({ message: 'No data provided for update' }, { status: 400 });
      }
  
      // Example: Admin authorization check (replace with your actual auth logic)
      const userRole = req.headers.get('x-user-role');
      if (userRole !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
      }
  
      // Perform the update
      const updatedHouse = await prisma.house.update({
        where: { id: houseId },
        data: body,
      });
  
      // Return the updated house data
      return NextResponse.json(updatedHouse, { status: 200 });
    } catch (error) {
      // Check if the error is due to the house not being found
    //   if (error.code === 'P2025') { // Prisma-specific error code for "Record not found"
    //     return NextResponse.json({ message: 'House not found' }, { status: 404 });
    //   }
  
      // Handle other errors
      return NextResponse.json(
        { message: 'Internal Server Error', error: (error as Error).message },
        { status: 500 }
      );
    }
  }
