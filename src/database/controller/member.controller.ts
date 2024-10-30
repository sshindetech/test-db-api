import { Controller } from "@nestjs/common";

import { MemberService } from "../services/member-service";
import { Member } from "src/database/tables/member.entity";
import { Crud, CrudController } from "@dataui/crud";


@Crud({
  model: {
    type: Member,
  },
})
@Controller("member")
export class MemberController implements CrudController<Member> {
  constructor(public service: MemberService) {}
}