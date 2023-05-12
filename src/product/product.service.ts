import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProdDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import knex, { Knex } from 'knex';

@Injectable()
export class ProductService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}
  async create(body: CreateProductDto, img: Express.Multer.File) {
    const { sell, buy, imgurl } = body;

    const newData = {
      advert_sell: sell,
      advert_buy: buy,
      advert_url: imgurl,
      avert_picture: img.filename,
    };

    await this.knex('advert').insert(newData);

    return { message: 'success', newData };
  }

  async findAll() {
    const data = await this.knex('advert').select('*');
    return { message: data };
  }

  async getUsersByFilter(date) {
    const adverts = await this.knex('advert').whereBetween(
      'advert_created_at',
      [date[0], date[1]],
    );
    console.log(adverts);

    return adverts;
  }

  async findOne(id: string) {
    const data = await this.knex('advert')
      .select('*')
      .where({ advert_id: id })
      .first();
    return { message: data };
  }
  //s/sss

  async update(id: string, body: UpdateProdDto) {
    const { sell, buy, imgurl } = body;
    const data = await this.knex('advert')
      .update({
        advert_sell: sell,
        advert_buy: buy,
        advert_url: imgurl,
      })
      .where({ advert_id: id })
      .returning('*');
    return { message: data };
  }

  remove(id: string) {
    return this.knex('advert')
      .update({
        advert_isActive: false,
      })
      .where({ advert_id: id });
  }
}
