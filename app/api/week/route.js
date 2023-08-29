import Week from "@/models/week";
import { connectToDb } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDb();

    const prompts = await Week.find({})

    return new Response(JSON.stringify(prompts), {status: 200})
  } catch(error) {
    return new Response("Failed to fetch all weeks", {status: 500})
  }
}