-- CreateTable
CREATE TABLE "persons" (
    "id" SERIAL NOT NULL,
    "person_Name" TEXT NOT NULL,
    "person_Email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduling" (
    "id" SERIAL NOT NULL,
    "event_Name" TEXT NOT NULL,
    "event_Participants" TEXT NOT NULL,
    "event_Date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scheduling_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "scheduling_event_Date_key" ON "scheduling"("event_Date");
