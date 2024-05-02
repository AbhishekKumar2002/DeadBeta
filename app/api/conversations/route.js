import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";



export async function POST(request) {
  try {

    const { email, usersId: userId,isGroup, members, name } = await request.json();
    // console.log({ email, userId})

    // const { userId,  } = body;

    const currentUser = await db.users.findUnique({
        where: {
            email
        },
       
    })

    console.log(currentUser.id
                            ,userId );
  
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    if (isGroup && (!members.length < 2 || !name)) {
      return new NextResponse("Invalid data", { status: 500 });
    }

    if (isGroup) {
      const newConversation = await db.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member) => ({
                id: member,
              })),
              {
                id: currentUser.id,
              },
            ],
          },
        },
        include: {
          users: true,
        },
      });

      return NextResponse.json(newConversation);
    }

    const existingConversations = await db.conversation.findMany({
      where: {
        OR: [
          { usersIds: { equals: [currentUser.id, userId] } },

          { usersIds: { equals: [userId, currentUser.id] } },
        ],
      },
    });

    const singleConversation = existingConversations[0];
     console.log(existingConversations[0])
    if (singleConversation) {
      return NextResponse.json(singleConversation);
    }

    const newConversation = await db.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: currentUser.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    });

    return NextResponse.json(newConversation);
  } catch (error) {

      console.log(error)
    return new NextResponse("Internal Error", { status: 500 });
  }
}