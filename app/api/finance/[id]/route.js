import Finance from "@/models/finance";
import { connectToDb } from "@/utils/database";

//DELETE
export const DELETE = async (request, {params}) => {
  try {
    await connectToDb()

    await Finance.findByIdAndRemove(params.id);

    return new Response("Finance deleted sucessfully", {status: 200})
  } catch (error) {
    return new Response("Failed to delete finance", {status: 500})
  }
}