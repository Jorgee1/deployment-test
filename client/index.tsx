import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppRouter } from '../server/trpc'

const trpc = createTRPCReact<AppRouter>()

const Nav = () => <nav>
    <Link to='/'>Home</Link>
    <Link to='/test'>Test</Link>
</nav>

const Home = () => {
    const { data, isLoading, isError } = trpc.greeting.useQuery()

    if (!data) {
        if (isLoading) return <>Loading...</>
        if (isError) return <>Error</>
    }

    return <>
        <div>Home</div>
        <Nav/>
        <div>{data}</div>
    </>
}

const Test = () => {
    return <>
        <div>Test</div>
        <Nav/>
    </>
}

const App = () => {
    const url = new URL(document.URL)
    const [trpcClient] = useState(() => trpc.createClient({links: [httpBatchLink({url: `http://${url.hostname}:3000/trpc`})]}))
    const [queryClient] = useState(() => new QueryClient())

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/test',
            element: <Test/>
        }
    ])

    return <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </trpc.Provider>
}


const main = () => {
    const root = document.createElement('div')
    document.body.replaceChildren()
    document.body.appendChild(root)
    createRoot(root).render(<App/>)    
}
main()

