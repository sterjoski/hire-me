import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { daycareService } from '../services/DaycareService'
import { CheckinChildRequest, CheckoutChildRequest } from '../types'

export enum CacheKey {
    ChildrenList = 'ChildrenList',
}

export const useGetChildrenList = () =>
    useQuery({
        queryKey: [CacheKey.ChildrenList],
        queryFn: () => daycareService.getChildrenList(),
    })

export const useCheckinChild = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (request: CheckinChildRequest) => {
            return daycareService.checkinChild(request)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CacheKey.ChildrenList] })
        },
    })
}

export const useCheckoutChild = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (request: CheckoutChildRequest) => {
            return daycareService.checkoutChild(request)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CacheKey.ChildrenList] })
        },
    })
}
