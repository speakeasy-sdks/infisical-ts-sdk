import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CreateSecretRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.Secret })
  secrets?: shared.Secret[];

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}

export class CreateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSecretRequestBody;
}

export class CreateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.Secret })
  secrets?: shared.Secret[];

  @SpeakeasyMetadata()
  statusCode: number;
}