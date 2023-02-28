import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretCommentCiphertext" })
  secretCommentCiphertext?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretCommentIV" })
  secretCommentIV?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretCommentTag" })
  secretCommentTag?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretKeyCiphertext" })
  secretKeyCiphertext?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretKeyIV" })
  secretKeyIV?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretKeyTag" })
  secretKeyTag?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretValueCiphertext" })
  secretValueCiphertext?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretValueIV" })
  secretValueIV?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secretValueTag" })
  secretValueTag?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  updatedAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace" })
  workspace?: string;
}