import { IsString, IsAlpha, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateProductDto {
  @IsNumberString()
  @IsNotEmpty()
  sell;
  @IsNumberString()
  @IsNotEmpty()
  buy;
}
