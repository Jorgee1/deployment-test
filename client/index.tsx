import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

const App = () => {
    const Nav = () => <nav>
        <Link to='/'>Home</Link>
        <Link to='/test'>Test</Link>
    </nav>

    const router = createBrowserRouter([
        {
            path: '/',
            element: <>
                <div>Home</div>
                <Nav/>

            </>
        },
        {
            path: '/test',
            element: <>
                <div>Test</div>
                <Nav/>
            </>
        }
    ])
    return <RouterProvider router={router}/>
}


const main = () => {
    const root = document.createElement('div')
    document.body.replaceChildren()
    document.body.appendChild(root)
    createRoot(root).render(<App/>)    
}
main()

