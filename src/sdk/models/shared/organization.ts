import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerId" })
  customerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}