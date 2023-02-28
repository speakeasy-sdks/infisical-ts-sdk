import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Payload } from "./payload";
import { Expose, Type } from "class-transformer";


export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payload" })
  @Type(() => Payload)
  payload?: Payload;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace" })
  workspace?: string;
}