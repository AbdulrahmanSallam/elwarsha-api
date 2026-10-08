import { Injectable } from "@nestjs/common";
import { LabelsRepository } from "./labels.repository.js";
import { Label } from "../../domain/models.js";

@Injectable()
export class LabelsService {
  constructor(private readonly labels: LabelsRepository) {}

  listLabels(): Promise<Label[]> {
    return this.labels.listLabels();
  }

  getLabelsByAssignmentIds(assignmentIds: string[]): Promise<Map<string, string[]>> {
    return this.labels.findNamesByAssignmentIds(assignmentIds);
  }
}
