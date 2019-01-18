export const convertCost = (cost) => {
    const costArray = cost.slice(1, cost.length - 1).split('}{')
    const costMap = {
        R: 'red',
        U: 'blue',
        B: 'black',
        W: 'white',
        G: 'green'
    }

    const formattedCost = costArray.reduce((acc, mana) => {
        if (Number(mana)) {
            acc['colorless'] = parseInt(mana)

            return acc

        } if (!acc[costMap[mana]]) {
            acc[costMap[mana]] = 0
        }

        acc[costMap[mana]]++

        return acc
    }, {})

    return formattedCost;
}

export const convertTypes = (types, subtypes) => {
    return types.concat(subtypes)
}
