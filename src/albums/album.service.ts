import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlbumDto } from './dtos/album.dto';

@Injectable()
export class AlbumService {
  constructor(private readonly prisma: PrismaService) {}

  async createAlbum(albumDto: AlbumDto) {
    try {
      const createAlbum = await this.prisma.album.create({
        data: {
          ...albumDto,
        },
      });
      return createAlbum;
    } catch (error) {
      throw new Error(`Error al crear el artista: ${error.message}`);
    }
  }
}

