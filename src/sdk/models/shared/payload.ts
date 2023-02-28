import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Payload extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "newSecretVersion" })
  newSecretVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "oldSecretVersion" })
  oldSecretVersion?: string;
}