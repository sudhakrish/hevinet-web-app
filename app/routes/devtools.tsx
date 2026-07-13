export async function loader() {
  return new Response(null, {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export default function DevtoolsRoute() {
  return null;
}
