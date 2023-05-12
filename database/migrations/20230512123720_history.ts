import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('history', (table) => {
    table
      .uuid('history_id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .notNullable();
    table.integer('history_buy').notNullable();
    table.integer('history_sell').notNullable();
    table.string('history_advert').notNullable();
    table.uuid('advert_id').references('advert_id').inTable('advert');
    table.boolean('user_isActive').defaultTo(true).notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('history');
}
