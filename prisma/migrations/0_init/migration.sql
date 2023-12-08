-- CreateTable
CREATE TABLE "Batch" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "license_level" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine_Number" (
    "id" SERIAL NOT NULL,
    "batch_id" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serial_number" TEXT NOT NULL,

    CONSTRAINT "Machine_Number_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Machine_Number" ADD CONSTRAINT "Machine_Number_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

