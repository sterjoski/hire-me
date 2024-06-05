import { format } from 'date-fns'
import { ChildEntityResponse } from '../types'

export class Child {
    childId: string
    institutionId: string
    groupId: string
    createdTime: string
    fullName: string
    birthday: string
    image: {
        small: string
        large: string
        empty: boolean
        colorCode: number
    }
    isSick: boolean
    isAbsent: boolean
    checkedIn: boolean
    checkinTime: string | null
    pickupTime: string | null

    constructor(json: ChildEntityResponse) {
        this.childId = json.childId
        this.institutionId = json.institutionId
        this.groupId = json.groupId
        this.createdTime = format(new Date(json.createdTime), 'yyyy-MM-dd HH:mm')
        this.fullName = json.name.fullName
        this.birthday = format(new Date(json.birthday), 'yyyy-MM-dd')
        this.image = json.image
        this.isSick = json.isSick
        this.isAbsent = json.isAbsent
        this.checkedIn = json.checkedIn
        this.checkinTime = json.checkinTime
            ? format(new Date(json.checkinTime), 'yyyy-MM-dd HH:mm')
            : null
        this.pickupTime = json.pickupTime
            ? format(new Date(json.pickupTime), 'yyyy-MM-dd HH:mm')
            : null
    }
}
