import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class RollbackSnapshotsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspaceId" })
  workspaceId: string;
}

export class RollbackSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RollbackSnapshotsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: number;
}

export class RollbackSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.Secret })
  secrets?: shared.Secret[];

  @SpeakeasyMetadata()
  statusCode: number;
}