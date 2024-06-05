import { HttpClient } from '@repo/http-client'
import { CheckinChildRequest, CheckoutChildRequest, GetChildrenListResponse } from '../types'
import { Child } from '../models/Child'

class DaycareService {
    private _httpClient = new HttpClient({
        config: {
            baseURL: import.meta.env.VITE_API_BASE_URL,
            responseType: 'json',
            params: {
                accessToken: import.meta.env.VITE_API_ACCESS_TOKEN,
            },
        },
    })

    async getChildrenList() {
        const url = '/daycare/tablet/group'

        const params = {
            groupId: '86413ecf-01a1-44da-ba73-1aeda212a196',
            institutionId: 'dc4bd858-9e9c-4df7-9386-0d91e42280eb',
        }

        const { data } = await this._httpClient.get<GetChildrenListResponse>(url, {
            params,
        })

        return data.children.map((child) => new Child(child))
    }

    async checkinChild({ childId, pickupTime }: CheckinChildRequest) {
        const url = `/v2/children/${childId}/checkin`

        const payload = {
            pickupTime,
        }

        const { data } = await this._httpClient.post<GetChildrenListResponse>(url, payload)

        return data
    }

    async checkoutChild({ childId }: CheckoutChildRequest) {
        const url = `/v2/children/${childId}/checkout`

        const { data } = await this._httpClient.post<GetChildrenListResponse>(url)

        return data
    }
}

export const daycareService = new DaycareService()
