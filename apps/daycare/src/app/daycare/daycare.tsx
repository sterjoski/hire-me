import { ColumnDef, Table } from '@repo/ui/table'
import {
    useCheckinChild,
    useCheckoutChild,
    useGetChildrenList,
} from '../../library/hooks/query-hooks'
import { useMemo, useState } from 'react'
import { Child } from '../../library/models/Child'
import { Button } from '@repo/ui/button'

export const Daycare = () => {
    const { data, isLoading, isFetching } = useGetChildrenList()
    const { mutateAsync: mutateCheckinChild } = useCheckinChild()
    const { mutateAsync: mutateCheckoutChild } = useCheckoutChild()

    const columns = useMemo<ColumnDef<Child>[]>(
        () => [
            {
                accessorKey: 'fullName',
                header: () => 'Full name',
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id,
            },
            {
                id: 'checkin',
                header: () => '🥚',
                cell: ({ cell, row }) => {
                    const [time, setTime] = useState('')
                    const handleTimeChange = (event: any) => {
                        setTime(event.target.value)
                    }

                    const onCheckin = async () => {
                        await mutateCheckinChild({
                            childId: row.original.childId,
                            pickupTime: time,
                        })
                        setTime('')
                    }
                    return (
                        <div>
                            <div>
                                <label htmlFor="timeInput">Select Time: </label>
                                <input
                                    type="time"
                                    id="timeInput"
                                    value={time}
                                    onChange={handleTimeChange}
                                />
                            </div>
                            <Button
                                onClick={() => onCheckin()}
                                disabled={isFetching || time === ''}
                            >
                                Checkin
                            </Button>
                        </div>
                    )
                },
                footer: (props) => props.column.id,
            },
            {
                id: 'checkout',
                header: () => '🐣',
                cell: ({ cell, row }) => (
                    <Button
                        onClick={() => mutateCheckoutChild({ childId: row.original.childId })}
                        disabled={isFetching || !row.original.checkedIn}
                    >
                        Checkout
                    </Button>
                ),
                footer: (props) => props.column.id,
            },
            {
                accessorKey: 'checkinTime',
                header: () => 'Checkin Time',
                cell: (info) => info.getValue() ?? '',
                footer: (props) => props.column.id,
            },
        ],
        [isFetching],
    )

    if (isLoading) return <div>Loading...</div>

    if (!data) return <div>No data</div>

    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    )
}
