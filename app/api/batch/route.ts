import { NextResponse } from "next/server"
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()
  console.log(data)
  const batch = await prisma.batch.create({
    data: {
      model: data.model,
      quantity: Number(data.quantity),
      date: (new Date(data.date)).toISOString(),
      license_level: Number(data.licenseLevel),
      comment: data.comment
    }
  })  
  return NextResponse.json({batch})
}