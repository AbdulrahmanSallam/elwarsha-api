import { Injectable } from "@nestjs/common";

import type { Label } from "../../domain/models.js";
import { PrismaService } from "../../infrastructure/prisma/prisma.service.js";

@Injectable()
export class LabelsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listLabels(): Promise<Label[]> {
    const records = await this.prisma.label.findMany({
      orderBy: { name: "asc" },
    });

    return records.map((record) => ({
      id: record.id,
      name: record.name,
    }));
  }

  async findNamesByAssignmentIds(
    assignmentIds: string[],
  ): Promise<Map<string, string[]>> {
    if (assignmentIds.length === 0) return new Map();

    const rows = await this.prisma.assignmentLabel.findMany({
      where: { assignmentId: { in: assignmentIds } },
      include: { label: { select: { name: true } } },
    });

    const byAssignment = new Map<string, string[]>();
    for (const row of rows) {
      const list = byAssignment.get(row.assignmentId) ?? [];
      list.push(row.label.name);
      byAssignment.set(row.assignmentId, list);
    }

    for (const [key, list] of byAssignment) {
      list.sort();
      byAssignment.set(key, list);
    }
    return byAssignment;
  }
}
