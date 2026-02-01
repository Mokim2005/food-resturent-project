import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const feedbackCollection = await connect("feedbacks");
export async function GET() {
  const result = await feedbackCollection.find().toArray();

  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({ message: "Please send a message" }, { status: 400 });
  }
  const newFeedback = { message, date: new Date().toISOString() };

  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedback")

  return Response.json(result);
}
