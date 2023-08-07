import Finance from "@/models/finance";
import { connectToDb } from "@/utils/database";

export const GET = async (request, {params}) => {
  try {
    await connectToDb();

    const finances = await Finance.find({
      creator: params.id
    }).populate('creator')

    return new Response(JSON.stringify(finances),{status: 200})
  } catch (error) {
    return new Response("Failed to fetch all finances",{status: 200})
  }
}
