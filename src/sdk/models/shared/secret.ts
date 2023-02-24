import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=secretCommentCiphertext" })
  secretCommentCiphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=secretCommentIV" })
  secretCommentIV?: string;

  @SpeakeasyMetadata({ data: "json, name=secretCommentTag" })
  secretCommentTag?: string;

  @SpeakeasyMetadata({ data: "json, name=secretKeyCiphertext" })
  secretKeyCiphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=secretKeyIV" })
  secretKeyIV?: string;

  @SpeakeasyMetadata({ data: "json, name=secretKeyTag" })
  secretKeyTag?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValueCiphertext" })
  secretValueCiphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValueIV" })
  secretValueIV?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValueTag" })
  secretValueTag?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: string;
}