import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class UpdateWorkspaceMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspaceId" })
  workspaceId: string;
}

export class UpdateWorkspaceMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWorkspaceMembershipPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Membership;
}

export class UpdateWorkspaceMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  membership?: shared.Membership;

  @SpeakeasyMetadata()
  statusCode: number;
}