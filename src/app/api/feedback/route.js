import { connect } from "@/app/lib/dbConnect";

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

  return Response.json(result);
}
