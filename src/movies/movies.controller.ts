import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies.';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return on movies with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `Thiw will patch a moive with the id: ${movieId}`;
  }
}
