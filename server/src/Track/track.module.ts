import {Module} from '@nestjs/common';
import { TrackController } from './track.controller';
import {TrackService} from "./track.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Track, TrackSchema} from "./Schemas/track.schema";
import {Comment, CommentSchema} from "./Schemas/comment.schema";
import {FileService} from "../file/file.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})

export class TrackModule {}