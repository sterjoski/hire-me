export interface ChildEntityResponse {
    childId: string
    institutionId: string
    groupId: string
    createdTime: string
    name: {
        fullName: string
        firstName: string
        middleName?: string
        lastName: string
    }
    birthday: string
    homeAddress: string | null
    extraInfo: string
    language: string
    nationality: string
    birthplace: string
    gender: number
    startDate: string
    endDate: string | null
    leavingReason: string | null
    isTestChild: boolean
    relations: any
    image: {
        small: string
        large: string
        empty: boolean
        colorCode: number
    }
    isSleeping: boolean
    naps: any[]
    hasVacation: boolean
    isSick: boolean
    isAbsent: boolean
    leaves: any[]
    onBus: boolean
    onTrip: boolean
    statuses: any[]
    statusRegistrations: any[]
    checkins: any[]
    checkedIn: boolean
    checkinTime: string | null
    pickupTime: string | null
    pickupRelationId: string | null
    pickupName: string
}

export interface GetChildrenListResponse {
    children: ChildEntityResponse[]
}

export interface CheckinChildRequest {
    childId: string
    pickupTime: string
}

export interface CheckoutChildRequest {
    childId: string
}
