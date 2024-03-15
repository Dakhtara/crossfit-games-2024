import prisma from '$lib/prisma.js';
import { redirect } from '@sveltejs/kit';
import { fail } from 'assert';


export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const firstname = data.get('firstname');
        const wod = data.get('wod');
        const score = data.get('score');
        const difficulty = data.get('difficulty');

        if (score === '') {
            return fail(400, {score, incorrect: true})
        }

       

        if (firstname === '') {
            return fail(400, {firstname, incorrect: true})
        }

        if (wod === '') {
            return fail(400, {wod, incorrect: true})
        }

        const res = await prisma.gamesRecord.create({
            data: {
                firstName: String(firstname).trim(),
                wod: String(wod).trim(),
                score: String(score).trim(),
                difficulty: String(difficulty).trim()
            }
        })

        if (!res) {
            return fail(500, {error: true})
        }


        redirect(303, '/')
    }
}