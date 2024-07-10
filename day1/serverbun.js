import { serve } from 'bun'
serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('hello its anuj', { status: 200 })
        } else if (url.pathname === '/lo') {
            return new Response('hello its me anuj i like mohanthal', { status: 200 })
        } else {
            return new Response('error 404', { status: 404 })
        }
    },
    port: 3000,
    hostName: '127.0.0.1'
})