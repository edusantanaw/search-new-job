/*
  Warnings:

  - Added the required column `city` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "city" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "city" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "ApplyJob_candidateId_idx" ON "ApplyJob"("candidateId");

-- CreateIndex
CREATE INDEX "Company_email_idx" ON "Company"("email");

-- CreateIndex
CREATE INDEX "Job_city_idx" ON "Job"("city");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");
