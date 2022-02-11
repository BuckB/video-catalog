import { EntityRepository, Repository } from "typeorm";
import { Video } from "./Video";

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> {

}
