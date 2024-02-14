import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('answers', (table) => {
    table.uuid('id').primary()
    table
      .uuid('question_id')
      .notNullable()
      .references('id')
      .inTable('questions')
    table.uuid('user_id').notNullable().references('id').inTable('users')
    table.text('content').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').nullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('answers')
}
