import {Module} from "@nestjs/common";
import {TrackModule} from "./Track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as path from 'path';
import {ServeStaticModule} from "@nestjs/serve-static";
import keys from "../config/keys";

@Module({
  imports: [
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
      MongooseModule.forRoot(keys.mongoURI),
      TrackModule,
      FileModule
  ]
})
export class AppModule {}

