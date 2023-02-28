import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DeleteWorkspaceMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspaceId" })
  workspaceId: string;
}

export class DeleteWorkspaceMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWorkspaceMembershipPathParams;
}

export class DeleteWorkspaceMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  membership?: shared.Membership;

  @SpeakeasyMetadata()
  statusCode: number;
}