import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class SecretVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;

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