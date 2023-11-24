addEventListener('fetch', (event: any) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
  // Your logic for handling the request goes here
  return new Response('Hello, Cloudflare Worker!', { status: 200 })
}
