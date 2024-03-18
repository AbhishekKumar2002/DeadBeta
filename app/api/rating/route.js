import { NextResponse } from "next/server";
import { ratingData, addRatingData, updateRatingData  } from "./ratingFunc";

export async function POST(req){
    try {
        const { username, feedback } = await req.json()
        const res = await addRatingData(username,feedback)
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
        const { username, feedback } = await req.json()
        const res = await updateRatingData(username,feedback)
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