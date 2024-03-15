import prisma from '$lib/prisma.js'
import { json } from '@sveltejs/kit'


export const GET = async ({url}) => {
    const firstWod = await prisma.gamesRecord.findMany({
        orderBy: {
            firstName: 'asc'
        }
    })
    return json({
        firstWod
    })
}