import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/saveProfile.module'
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SocialLinksModule } from './socialLinks/socialLinks.module';
import { ArtistModule } from './artists/artists.module';
import { MusicModule } from './music/music.module';
import { PlaylistModule } from './playlist/playlist.module';
import { AlbumModule } from './albums/album.module';
import { MatchModule } from './matchUsers/match.module';
import { PreferencesModule } from './preferences/preferences.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    AuthModule, 
    PrismaModule, 
    ProfileModule, 
    SocialLinksModule, 
    ArtistModule, 
    MusicModule,
    PlaylistModule,
    AlbumModule,
    MatchModule,
    PreferencesModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  },],
})
export class AppModule {}
