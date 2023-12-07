-- CreateTable
CREATE TABLE "Batch" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "license_level" INTEGER NOT NULL,
    "serial_number" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

