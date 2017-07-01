declare interface Task{
  "id": number,
  "name": string,
  "creation_date"?: Date,
  "due_date"?: Date,
  "start_date"?: Date,
  "is_completed"?: boolean,
  "is_archived"?: boolean,
  "estimated_effort"?: number,
  "actual_effort"?: number,
  "physical_progress"?: number,
  "obj_status"?: string,
  "description"?: string,
  "project_id"?: number,
  "tags"?: Array<string>,
  "is_high_priority"?: boolean
}

