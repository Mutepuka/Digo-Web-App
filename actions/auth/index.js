"use server";

import prisma from "@libs/prisma";

export const onCompleteRegistration = async (fullname, clerkId, type) => {
    try {
        // Create user using Prisma client
        const registered = await prisma.user.create({
            data: {
                fullname,
                clerkId,
                type,
                subscritpion: {
                    create: {},
                },
            },
            select: {
                fullname: true,
                Id: true,
                type: true,
            },
        });

        if (registered) {
            return { status: 200, user: registered };
        }
    } catch (error) {
        return { status: 400, message: "Internal server error" };
    }
};
