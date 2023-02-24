import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Sender } from "./sender";


export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedkey" })
  encryptedkey?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;

  @SpeakeasyMetadata({ data: "json, name=receiver" })
  receiver?: string;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: Sender;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: string;
}