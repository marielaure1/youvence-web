import React from 'react'
import ReactDOM from 'react-dom/client'
import { router, RouterProvider } from "./routes"
import { Provider } from 'react-redux';
import store from '@/src/stores/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
)