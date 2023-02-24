import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}