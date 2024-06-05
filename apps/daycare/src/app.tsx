import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Daycare } from './app/daycare/daycare'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Daycare />
        </QueryClientProvider>
    )
}
