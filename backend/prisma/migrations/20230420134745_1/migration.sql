-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scheduled_date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL
);
