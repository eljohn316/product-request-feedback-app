-- CreateTable
CREATE TABLE "ProductRequest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductRequest_pkey" PRIMARY KEY ("id")
);
