import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Sender } from "./sender";
import { Expose, Type } from "class-transformer";


export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "encryptedkey" })
  encryptedkey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nonce" })
  nonce?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "receiver" })
  receiver?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sender" })
  @Type(() => Sender)
  sender?: Sender;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace" })
  workspace?: string;
}