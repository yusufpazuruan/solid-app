import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Jobs Table
export const jobsTable = sqliteTable("jobs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

// Fighters Table
export const fightersTable = sqliteTable("fighters", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nip: text("nip").unique().notNull(),
  password: text("password").notNull(),
  email: text("email").unique().notNull(),
  fullname: text("fullname").notNull(),
  gender: text("gender").notNull(),
  jobs: text("jobs", { mode: "json" })
    .notNull()
    .$type<(typeof integer)[]>()
    .default(sql`'[]'`)
    .references(() => jobsTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

// Celass Table
export const celassTable = sqliteTable("celass", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  supervisor: integer("supervisor").references(() => fightersTable.id, {
    onDelete: "cascade",
  }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

// Rooms Table
export const roomsTable = sqliteTable("rooms", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  supervisor: integer("supervisor").references(() => fightersTable.id, {
    onDelete: "cascade",
  }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

// Students Table
export const studentsTable = sqliteTable("students", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nis: text("nis").unique().notNull(),
  password: text("password").notNull(),
  email: text("email").unique().notNull(),
  fullname: text("fullname").notNull(),
  gender: text("gender").notNull(),
  on_room: integer("on_room").references(() => roomsTable.id, {
    onDelete: "cascade",
  }),
  on_class: integer("on_class").references(() => celassTable.id, {
    onDelete: "cascade",
  }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

// Subjects Table
export const subjectsTable = sqliteTable("subjects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  teacher: integer("teacher").references(() => fightersTable.id, {
    onDelete: "cascade",
  }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export type InsertJob = typeof jobsTable.$inferInsert;
export type SelectJob = typeof jobsTable.$inferSelect;

export type InsertFighter = typeof fightersTable.$inferInsert;
export type SelectFighter = typeof fightersTable.$inferSelect;

export type InsertCelass = typeof celassTable.$inferInsert;
export type SelectCelass = typeof celassTable.$inferSelect;

export type InsertRoom = typeof roomsTable.$inferInsert;
export type SelectRoom = typeof roomsTable.$inferSelect;

export type InsertStudent = typeof studentsTable.$inferInsert;
export type SelectStudent = typeof studentsTable.$inferSelect;

export type InsertSubject = typeof subjectsTable.$inferInsert;
export type SelectSubject = typeof subjectsTable.$inferSelect;
