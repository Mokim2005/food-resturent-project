import { feedback } from "../route";

export async function GET(request) {
  return Response.json(feedback);
}
