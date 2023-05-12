import {
  IsString,
  IsAlpha,
  IsNotEmpty,
  IsNumberString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsNumberString()
  @IsNotEmpty()
  sell;
  @IsNumberString()
  @IsNotEmpty()
  buy;
  @IsUrl()
  @IsNotEmpty()
  imgurl;
}
export class UpdateProdDto {
  @IsNumberString()
  @IsNotEmpty()
  sell;
  @IsNumberString()
  @IsNotEmpty()
  buy;
  @IsUrl()
  @IsNotEmpty()
  imgurl;
}
