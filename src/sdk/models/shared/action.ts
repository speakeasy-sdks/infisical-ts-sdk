import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Payload } from "./payload";


export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: string;
}