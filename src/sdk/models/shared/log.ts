import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Action } from "./action";
import { Expose, Type } from "class-transformer";


export class Log extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "actionNames" })
  actionNames?: string[];

  @SpeakeasyMetadata({ elemType: Action })
  @Expose({ name: "actions" })
  @Type(() => Action)
  actions?: Action[];

  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  updatedAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace" })
  workspace?: string;
}