import { Controller, Get } from "@nestjs/common";

import { LabelsService } from "./labels.service.js";
import { RequireCapability } from "../identity/auth.guard.js";

@Controller("labels")
export class LabelsController {
  constructor(private readonly labels: LabelsService) {}

  @Get()
  @RequireCapability("assignments.read")
  list() {
    return this.labels.listLabels();
  }
}
