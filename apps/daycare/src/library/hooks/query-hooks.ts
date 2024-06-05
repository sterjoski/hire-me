import { useMutation, useQuery } from '@tanstack/react-query'
import {
    CheckinChildRequest,
    CheckoutChildRequest,
    daycareService,
} from '../services/DaycareService'

export enum CacheKey {
    ChildrenList = 'ChildrenList',
}

export const useGetChildrenList = () =>
    useQuery({
        queryKey: [CacheKey.ChildrenList],
        queryFn: () => daycareService.getChildrenList(),
    })

export const useCheckinChild = () =>
    useMutation({
        mutationFn: (request: CheckinChildRequest) => {
            return daycareService.checkinChild(request)
        },
    })

export const useCheckoutChild = () =>
    useMutation({
        mutationFn: (request: CheckoutChildRequest) => {
            return daycareService.checkoutChild(request)
        },
    })
