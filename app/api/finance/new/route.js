import { connectToDb } from "@/utils/database";
import Finance from "@/models/finance";

export const POST = async (request) => {
  const { userId, desc, value, outcome } = await request.json()

  try {
    await connectToDb()
    const newFinance = new Finance({creator: userId, desc, value, outcome});

    await newFinance.save();
    return new Response(JSON.stringify(newFinance), {status: 201});
  } catch (error) {
    return new Response("Failed to create a new Finance", {status: 500});
  }
}