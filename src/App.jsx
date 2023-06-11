// CSS
import '@/src/assets/myAnimation/css/style.css'
import '@/src/assets/css/style.css'

// Components
import Nav from '@/src/components/layout/Nav'
import Footer from '@/src/components/layout/Footer'
import Search from '@/src/components/modals/Search'
import { Outlet } from "react-router-dom"

function App() {

    return (
        <>
            <Nav />
            <Search />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App