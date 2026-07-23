/*
  Warnings:

  - Made the column `slug` on table `Classroom` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Classroom" ALTER COLUMN "slug" SET NOT NULL;
