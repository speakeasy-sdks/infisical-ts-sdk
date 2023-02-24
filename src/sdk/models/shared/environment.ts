import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}