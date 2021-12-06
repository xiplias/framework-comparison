/*
  Warnings:

  - Added the required column `order` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "order" TEXT NOT NULL
);
INSERT INTO "new_Todo" ("done", "id", "title") SELECT "done", "id", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
CREATE UNIQUE INDEX "Todo_title_key" ON "Todo"("title");
CREATE UNIQUE INDEX "Todo_order_key" ON "Todo"("order");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
