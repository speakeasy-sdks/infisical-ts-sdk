import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Sender extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "publicKey" })
  publicKey?: string;
}