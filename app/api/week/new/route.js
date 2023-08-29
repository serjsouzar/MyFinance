import { connectToDb } from "@/utils/database";
import Week from "@/models/week";

export const POST = async (request) => {
  const { finances } = await request.json();

  try {
    await connectToDb();

    const newWeek = new Week({
      week: finances.map(finance => ({ 
        finance: finance._id,
       }))
    });

    

    await newWeek.save();
    return new Response(JSON.stringify(newWeek), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Week", { status: 500 });
  }
};
