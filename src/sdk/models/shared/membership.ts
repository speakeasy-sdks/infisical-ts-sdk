import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";


export class Membership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => User)
  user?: User;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace" })
  workspace?: string;
}