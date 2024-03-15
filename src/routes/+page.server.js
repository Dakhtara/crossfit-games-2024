import prisma from "$lib/prisma"

export const load = async () => {
    const firstWod = await prisma.gamesRecord.findMany({
        orderBy: {
            firstName: 'asc'
        }
    })
    return {
        firstWod
    }
}