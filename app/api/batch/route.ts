import { NextResponse } from "next/server"
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()
  
  const model = data.model
  const quantity = Number(data.quantity)
  const date = (new Date(data.date)).toISOString()

  const batch = await prisma.batch.create({
    data: {
      model,
      date,
      license_level: Number(data.licenseLevel),
      comment: data.comment,
      machine_numbers: {
        create: Array(quantity).fill({
          model,
          date
        })
      }
    }
  })  
  return NextResponse.json({batch})
}