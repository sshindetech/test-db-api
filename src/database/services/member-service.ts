import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "src/database/tables/member.entity";


@Injectable()
export class MemberService extends TypeOrmCrudService<Member> {
  constructor(@InjectRepository(Member) repo) {
    super(repo);
  }
}