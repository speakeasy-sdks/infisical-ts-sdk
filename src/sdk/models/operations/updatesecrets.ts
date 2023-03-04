import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class UpdateSecretsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Secret })
  @Expose({ name: "secrets" })
  @Type(() => shared.Secret)
  secrets?: shared.Secret[];
}

export class UpdateSecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSecretsRequestBody;
}

export class UpdateSecretsResponse extends SpeakeasyBase {
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