// # API to get all houses

// POST /api/houses/add: Add a new house (admin only).
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface HouseData {
    title: string;
    description: string;
    price: number;
    available: boolean;
    imageUrl: string;
  }

export async function POST(request: Request) {
    
    try {
        // Parse the request body
        const body: HouseData = await request.json();

        // Validate required fields
        if (!body.title || !body.description || body.price == null || body.available == null || !body.imageUrl) {
            return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), { status: 400 });
        }

        // Create a new house entry in the database
        const newHouse = await prisma.house.create({
            data: body,
        });

        return new Response(JSON.stringify({ success: true, house: newHouse }), { status: 201 });
    } catch (error) {
        console.error('Error creating house:', error);
        return new Response(JSON.stringify({ success: false, message: 'Error creating house' }), { status: 500 });
    }
}


