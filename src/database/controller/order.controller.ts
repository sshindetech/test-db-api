import { Controller } from "@nestjs/common";

import { MemberService } from "../services/member-service";
import { Member } from "src/database/tables/member.entity";
import { Crud, CrudController } from "@dataui/crud";
import { Order } from "../tables/order.entity";
import { OrderService } from "../services/order-service";


@Crud({
  model: {
    type: Member,
  },
})
@Controller("order")
export class OrderController implements CrudController<Order> {
  constructor(public service: OrderService) {}
}