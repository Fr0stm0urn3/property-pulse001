import Property from "@/models/Property"
import connectDB from "@/config/database"

//GET /api/properties
export const GET = async () => {
  try {
    await connectDB()

    const properties = await Property.find({
      is_featured: true,
    })

    return new Response(JSON.stringify(properties), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Something went wrong", { status: 500 })
  }
}
