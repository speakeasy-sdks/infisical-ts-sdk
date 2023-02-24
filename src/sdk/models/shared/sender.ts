import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Sender extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}