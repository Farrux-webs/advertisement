import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UploadedFile,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UseInterceptors } from '@nestjs/common';
import { CreateProductDto, UpdateProdDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 } from 'uuid';

@Controller('adverts')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('add')
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, img, cb) => {
          return cb(null, v4() + extname(img.originalname));
        },
      }),
    }),
  )
  create(
    @Body() body: CreateProductDto,
    @UploadedFile() img: Express.Multer.File,
  ) {
    return this.productService.create(body, img);
  }
  @Get(['date', 'date/:date'])
  getUsersByFilter(@Query('date') date: string) {
    console.log(date);
    return this.productService.getUsersByFilter(date);
  }
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateProdDto) {
    return this.productService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
