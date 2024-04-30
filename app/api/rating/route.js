import { NextResponse } from "next/server";
import { ratingData, addRatingData, updateRatingData  } from "./ratingFunc";

export async function POST(req){
    try {
        const data = await req.json()
        const res = await addRatingData(data.users.username,data.feedback)
        return NextResponse.json({
            message: "Added",
        },{
            status: 201
        })
    } catch(err){
        return NextResponse.json({
            message: err.message,
        },{
            status: 500
        })
    }
}

export const dynamic = 'force-dynamic'

export async function GET(req){
    try {
        const res = await ratingData()
        return NextResponse.json({
            res
        },{
            status: 200
        })
    } catch(err){
        return NextResponse.json({
            message: err.message,
        },{
            status: 500
        })
    }
}

export async function PUT(req){
    try {
        const data = await req.json()
        const res = await updateRatingData(data.users.username,data.feedback)
        return NextResponse.json({
            message: "Updated",
        },{
            status: 200
        })
    } catch(err){
        return NextResponse.json({
            message: err.message,
        },{
            status: 500
        })
    }
}