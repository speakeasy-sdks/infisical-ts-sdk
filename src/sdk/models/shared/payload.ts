import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Payload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newSecretVersion" })
  newSecretVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=oldSecretVersion" })
  oldSecretVersion?: string;
}