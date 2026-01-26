import { connect } from "@/app/lib/dbConnect";


export async function GET() {
  const feedbackCollection = await connect("feedbacks");
  const result = await feedbackCollection.find().toArray();

  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({ message: "Please send a message" }, { status: 400 });
  }

  const feedbackCollection = await connect("feedbacks");
  const result = await feedbackCollection.insertOne({ message });

  return Response.json({
    acknowledged: result.acknowledged,
    insertedId: result.insertedId,
  });
}
