import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  // @IsString()
  // readonly title?: string;
  //
  // @IsNumber()
  // readonly year?: number;
  //
  // @IsString()
  // readonly genres?: string[];
}
