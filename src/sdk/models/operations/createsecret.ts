import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class CreateSecretRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment?: string;

  @SpeakeasyMetadata({ elemType: shared.Secret })
  @Expose({ name: "secrets" })
  @Type(() => shared.Secret)
  secrets?: shared.Secret[];

  @SpeakeasyMetadata()
  @Expose({ name: "workspaceId" })
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

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}