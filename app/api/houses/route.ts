// # API to get all houses

// GET /api/houses: Fetch all houses.

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Fetch all records from the 'house' table
        const data = await prisma.house.findMany();
        console.log(data);

        // Return the data as a JSON response
        return new Response(JSON.stringify({ success: true, houses: data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching houses:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Error fetching houses' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
