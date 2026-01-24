export const feedback = [
  {
    id: 1,
    message: "this is really yammi",
  },
  {
    id: 1,
    message: "water der bahave aro valo kora chay",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yahoo, API created",
  });
}
