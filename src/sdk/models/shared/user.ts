import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "encryptedPrivateKey" })
  encryptedPrivateKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "firstName" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "iv" })
  iv?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastName" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  updatedAt?: string;
}