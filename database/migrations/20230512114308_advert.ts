import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('advert', (table) => {
    table
      .uuid('advert_id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .notNullable();
    table.integer('advert_sell').notNullable();
    table.integer('advert_buy', 64).notNullable();
    table.string('avert_picture').notNullable();
    table.string('advert_url').notNullable();
    table.boolean('advert_isActive').defaultTo(true).notNullable();
    table
      .timestamp('advert_created_at', { useTz: false })
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('advert');
}
