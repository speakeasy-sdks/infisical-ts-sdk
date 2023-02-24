import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Environment } from "./environment";


export class Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=environments", elemType: Environment })
  environments?: Environment[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;
}