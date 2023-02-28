import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Environment } from "./environment";
import { Expose, Type } from "class-transformer";


export class Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: Environment })
  @Expose({ name: "environments" })
  @Type(() => Environment)
  environments?: Environment[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization?: string;
}