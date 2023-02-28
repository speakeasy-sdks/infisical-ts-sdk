import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class RollbackSecretVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secretId" })
  secretId: string;
}

export class RollbackSecretVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RollbackSecretVersionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: number;
}

export class RollbackSecretVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  secret?: shared.Secret;

  @SpeakeasyMetadata()
  statusCode: number;
}