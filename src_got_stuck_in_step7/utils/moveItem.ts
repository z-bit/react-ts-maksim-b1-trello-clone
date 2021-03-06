export const moveItem = <T>(array: T[], from: number, to: number) => {

    const toIndex = to < 0 ? array.length + to : to
    const item = array.splice(from, 1)[0]

    array.splice(toIndex, 0, item)

    return array
}